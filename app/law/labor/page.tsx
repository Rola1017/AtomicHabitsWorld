import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

type WpPost = {
  title: string
  slug: string
}

type WpGraphQLResponse = {
  data?: {
    category?: {
      databaseId: number
      slug: string
      name: string
    } | null
    posts?: {
      nodes?: WpPost[]
    }
  }
  errors?: Array<{ message?: string }>
}

async function fetchLaborPosts(): Promise<WpPost[]> {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
  if (!endpoint) return []

  try {
    // 1) 先用 slug 找分類 ID（避免中文名稱比對失敗）
    const categoryRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query LaborCategoryId {
            category(id: "labor-social-law", idType: SLUG) {
              databaseId
              slug
              name
            }
          }
        `,
      }),
      cache: "no-store",
    })

    if (!categoryRes.ok) return []

    const categoryJson = (await categoryRes.json()) as WpGraphQLResponse
    if (categoryJson.errors?.length) return []

    const categoryId = categoryJson.data?.category?.databaseId
    if (!categoryId) return []

    // 2) 再用 categoryIn 精準抓文章
    const postsRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query LaborPostsByCategoryId($categoryId: [ID]) {
            posts(where: { categoryIn: $categoryId }, first: 12) {
              nodes {
                title
                slug
              }
            }
          }
        `,
        variables: { categoryId: [categoryId] },
      }),
      cache: "no-store",
    })

    if (!postsRes.ok) return []

    const postsJson = (await postsRes.json()) as WpGraphQLResponse
    if (postsJson.errors?.length) return []

    return postsJson.data?.posts?.nodes ?? []
  } catch {
    return []
  }
}

export default async function LaborPage() {
  const laborPosts = await fetchLaborPosts()
  const hasPosts = laborPosts.length > 0

  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        {hasPosts ? (
          laborPosts.map((post) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              href={`/law/labor/${encodeURIComponent(post.slug)}`}
              variant="simple"
            />
          ))
        ) : (
          <div className="rounded-2xl border border-[#D1C7B7] bg-white/70 p-6 text-center text-[#6b7280] sm:p-8">
            目前尚無「勞動社會法」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}

