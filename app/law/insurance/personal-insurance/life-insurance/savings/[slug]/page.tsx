import type { Metadata } from "next"

import {
  generateLawInsuranceArticleMetadata,
  LawInsuranceWpArticle,
} from "@/components/law/law-insurance-wp-article"

const SITE_PATH_KEY = "insurance/personal-insurance/life-insurance/savings"
const HERO_TITLE = ["儲蓄險"] as const
const HERO_LATIN = "Savings-type life insurance."

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return generateLawInsuranceArticleMetadata(SITE_PATH_KEY, slug)
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <LawInsuranceWpArticle
      slug={decodeURIComponent(slug)}
      sitePathKey={SITE_PATH_KEY}
      heroTitle={[...HERO_TITLE]}
      heroLatin={HERO_LATIN}
    />
  )
}
