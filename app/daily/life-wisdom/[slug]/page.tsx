import type { Metadata } from "next"

import {
  DailySupabaseArticle,
  generateDailySupabaseArticleMetadata,
} from "@/components/daily/daily-supabase-article"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return generateDailySupabaseArticleMetadata("life-wisdom", slug)
}

export default async function DailyLifeWisdomSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <DailySupabaseArticle rawSlug={slug} />
}

