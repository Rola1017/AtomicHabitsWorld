import type { Metadata } from "next"

import {
  generateLawInsuranceArticleMetadata,
  LawInsuranceWpArticle,
} from "@/components/law/law-insurance-wp-article"

const SITE_PATH_KEY =
  "civil/family-and-inheritance/inheritance-and-forced-heirship"
const HERO_TITLE = ["遺產繼承與特留分實務"] as const
const HERO_LATIN = "Inheritance & forced heirship."

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
