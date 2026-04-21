import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// 初始化 Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceRole);

// WordPress GraphQL 端點
const WP_GRAPHQL_URL = 'https://cms.atomichabitsworld.com/graphql';

// 分類對應表（WordPress 分類 slug → Supabase 分類）
const categoryMapping: Record<string, { main: string; sub?: string }> = {
  'labor-social': { main: 'law', sub: 'labor' },
  'labor-individual': { main: 'law', sub: 'labor' },
  'labor-collective': { main: 'law', sub: 'labor' },
  'employment-insurance': { main: 'law', sub: 'labor' },
  'labor-insurance': { main: 'law', sub: 'labor' },
  'occupational-accident': { main: 'law', sub: 'labor' },
  insurance: { main: 'law', sub: 'insurance' },
  civil: { main: 'law', sub: 'civil' },
  administrative: { main: 'law', sub: 'administrative' },
  criminal: { main: 'law', sub: 'criminal' },
  'civil-procedure': { main: 'law', sub: 'civil-procedure' },
  essay: { main: 'daily', sub: 'essay' },
  exam: { main: 'daily', sub: 'exam' },
  'left-hand-writing': { main: 'daily', sub: 'left-hand-writing' },
  'life-wisdom': { main: 'daily', sub: 'life-wisdom' },
  study: { main: 'daily', sub: 'study' },
  'founder-story': { main: 'daily', sub: 'founder-story' },
};

type WpPost = {
  databaseId: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featuredImage?: { node?: { sourceUrl?: string | null } | null } | null;
  categories?: { edges?: Array<{ node?: { slug?: string } | null }> } | null;
  seo?: { metaDesc?: string | null } | null;
};

// 從 WordPress 抓文章
async function fetchWordPressPosts(): Promise<WpPost[]> {
  const query = `
    query GetAllPosts {
      posts(first: 100, where: { status: PUBLISH }) {
        edges {
          node {
            id
            databaseId
            title
            slug
            content
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories(first: 5) {
              edges {
                node {
                  slug
                }
              }
            }
            seo {
              metaDesc
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error('WordPress GraphQL HTTP error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    const edges = data?.data?.posts?.edges;

    if (!Array.isArray(edges)) return [];
    return edges.map((edge: { node: WpPost }) => edge.node).filter(Boolean);
  } catch (error) {
    console.error('Failed to fetch WordPress posts:', error);
    return [];
  }
}

// 轉換資料格式
function transformPost(wpPost: WpPost) {
  // 找出主分類和子分類
  const categories = wpPost.categories?.edges?.map((e) => e?.node?.slug).filter(Boolean) as string[] || [];
  const categorySlug = categories[0] || 'law';
  const categoryInfo = categoryMapping[categorySlug] || { main: 'law', sub: 'law' };

  return {
    wp_id: wpPost.databaseId,
    title: wpPost.title,
    slug: wpPost.slug,
    content: wpPost.content,
    excerpt: wpPost.excerpt || '',
    status: 'published',
    category_main: categoryInfo.main,
    category_sub: categoryInfo.sub || categorySlug,
    tags: categories,
    featured_image_url: wpPost.featuredImage?.node?.sourceUrl || null,
    meta_description: wpPost.seo?.metaDesc || wpPost.excerpt || '',
    structured_qa: null,
    direct_answer: null,
  };
}

// 主要同步邏輯
export async function POST(request: NextRequest) {
  try {
    // 驗證密鑰（防止濫用）
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${process.env.SYNC_SECRET_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 抓 WordPress 文章
    const wpPosts = await fetchWordPressPosts();
    console.log(`Found ${wpPosts.length} WordPress posts`);

    // 轉換格式
    const transformedPosts = wpPosts.map(transformPost);

    // 存進 Supabase（更新或插入）
    const results: Array<{ slug: string; status: 'success' | 'failed'; error?: string }> = [];
    for (const post of transformedPosts) {
      const { data: _data, error } = await supabase
        .from('articles')
        .upsert(post, { onConflict: 'wp_id' });

      if (error) {
        console.error(`Failed to sync post ${post.slug}:`, error);
        results.push({ slug: post.slug, status: 'failed', error: error.message });
      } else {
        results.push({ slug: post.slug, status: 'success' });
      }
    }

    // 計算統計
    const successCount = results.filter((r) => r.status === 'success').length;
    const failureCount = results.filter((r) => r.status === 'failed').length;

    return NextResponse.json({
      message: 'Sync completed',
      total: transformedPosts.length,
      success: successCount,
      failed: failureCount,
      details: results,
    });
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
