"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { MenuTreeDropdown } from "@/components/ui/menu-tree-dropdown"

const mainNavItems = [
  { name: "勞動社會法", href: "/law/labor", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "保險法", href: "/law/insurance", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "民法", href: "/law/civil", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
  { name: "行政法", href: "/law/administrative", baseColor: "#EFDAD6", accentColor: "#DDBBB4" },
  { name: "刑法", href: "/law/criminal", baseColor: "#EDE8F0", accentColor: "#D9D1E6" },
  { name: "民事訴訟法", href: "/law/civil-procedure", baseColor: "#F8EDE8", accentColor: "#EBDDD5" },
]

// /law/labor 及其子頁：改顯示勞動社會法底下的三個分類
const laborNavItems = [
  { name: "個別勞動法", href: "/law/labor/individual", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "社會法", href: "/law/labor/social", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "集體勞動法&程序法", href: "/law/labor/collective-procedure", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
]

// /law/labor/individual 及其子頁：顯示個別勞動法底下的四個分類（固定順序）
const individualLaborNavItems = [
  { name: "勞動契約與入職管理", href: "/law/labor/individual/contract-onboarding", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "工資、工時與休假", href: "/law/labor/individual/wage-hours-leave", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "終止契約、資遣與退休", href: "/law/labor/individual/termination-layoff-retirement", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
  { name: "性別平等與職場霸凌", href: "/law/labor/individual/gender-equality-bullying", baseColor: "#EFDAD6", accentColor: "#DDBBB4" },
]

// /law/labor/social 及其子頁：顯示社會法底下的五個分類（固定順序）
const socialLawNavItems = [
  { name: "勞工保險(勞保)", href: "/law/labor/social/labor-insurance", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "職業災害保險與保護(災保法)", href: "/law/labor/social/occupational-accident-insurance", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "就業保險與失業保障", href: "/law/labor/social/employment-insurance", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
  { name: "全民健保與二代健保", href: "/law/labor/social/nhi", baseColor: "#EFDAD6", accentColor: "#DDBBB4" },
  { name: "國民年金與社會福利", href: "/law/labor/social/national-pension-welfare", baseColor: "#EDE8F0", accentColor: "#D9D1E6" },
]

// /law/labor/collective-procedure 及其子頁：顯示集體勞動法&程序法底下的兩個分類（固定順序）
const collectiveProcedureNavItems = [
  { name: "勞資爭議處理與調解程序", href: "/law/labor/collective-procedure/dispute-mediation", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "行政救濟與勞檢應對", href: "/law/labor/collective-procedure/admin-remedies-labor-inspection", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
]

// /law/insurance 及其子頁：顯示保險法底下的四個分類（固定順序）
const insuranceLawNavItems = [
  { name: "理賠實務與保險法總則", href: "/law/insurance/claims-and-general", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "人身保險規劃", href: "/law/insurance/personal-insurance", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "企業保險與責任險", href: "/law/insurance/corporate-liability", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
  { name: "金融消費者保護與法規", href: "/law/insurance/financial-consumer-protection", baseColor: "#EFDAD6", accentColor: "#DDBBB4" },
]

// /law/insurance/claims-and-general 及其子頁：顯示三個分類（固定順序）
const claimsGeneralNavItems = [
  { name: "告知義務", href: "/law/insurance/claims-and-general/disclosure-duty", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "契約效力", href: "/law/insurance/claims-and-general/contract-validity", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "爭議處理", href: "/law/insurance/claims-and-general/dispute-resolution", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
]

// /law/insurance/personal-insurance 及其子頁：顯示三個分類（固定順序）
const personalInsuranceNavItems = [
  { name: "壽險", href: "/law/insurance/personal-insurance/life-insurance", baseColor: "#E8EEF0", accentColor: "#D5E0E8" },
  { name: "醫療險", href: "/law/insurance/personal-insurance/medical", baseColor: "#F5F0E8", accentColor: "#E8E0D5" },
  { name: "意外險", href: "/law/insurance/personal-insurance/accident", baseColor: "#E8F0EC", accentColor: "#D5E8DD" },
]

const laborMenuTree = [
  {
    label: "個別勞動法",
    href: "/law/labor/individual",
    children: [
      { label: "勞動契約與入職管理", href: "/law/labor/individual/contract-onboarding" },
      { label: "工資、工時與休假", href: "/law/labor/individual/wage-hours-leave" },
      { label: "終止契約、資遣與退休", href: "/law/labor/individual/termination-layoff-retirement" },
      { label: "性別平等與職場霸凌", href: "/law/labor/individual/gender-equality-bullying" },
    ],
  },
  {
    label: "社會法",
    href: "/law/labor/social",
    children: [
      { label: "勞工保險(勞保)", href: "/law/labor/social/labor-insurance" },
      { label: "職業災害保險與保護(災保法)", href: "/law/labor/social/occupational-accident-insurance" },
      { label: "就業保險與失業保障", href: "/law/labor/social/employment-insurance" },
      { label: "全民健保與二代健保", href: "/law/labor/social/nhi" },
      { label: "國民年金與社會福利", href: "/law/labor/social/national-pension-welfare" },
    ],
  },
  {
    label: "集體勞動法&程序法",
    href: "/law/labor/collective-procedure",
    children: [
      { label: "勞資爭議處理與調解程序", href: "/law/labor/collective-procedure/dispute-mediation" },
      { label: "行政救濟與勞檢應對", href: "/law/labor/collective-procedure/admin-remedies-labor-inspection" },
    ],
  },
] as const

const individualLaborMenuTree = [
  { label: "勞動契約與入職管理", href: "/law/labor/individual/contract-onboarding" },
  { label: "工資、工時與休假", href: "/law/labor/individual/wage-hours-leave" },
  { label: "終止契約、資遣與退休", href: "/law/labor/individual/termination-layoff-retirement" },
  { label: "性別平等與職場霸凌", href: "/law/labor/individual/gender-equality-bullying" },
] as const

const socialLawMenuTree = [
  { label: "勞工保險(勞保)", href: "/law/labor/social/labor-insurance" },
  { label: "職業災害保險與保護(災保法)", href: "/law/labor/social/occupational-accident-insurance" },
  { label: "就業保險與失業保障", href: "/law/labor/social/employment-insurance" },
  { label: "全民健保與二代健保", href: "/law/labor/social/nhi" },
  { label: "國民年金與社會福利", href: "/law/labor/social/national-pension-welfare" },
] as const

const collectiveProcedureMenuTree = [
  { label: "勞資爭議處理與調解程序", href: "/law/labor/collective-procedure/dispute-mediation" },
  { label: "行政救濟與勞檢應對", href: "/law/labor/collective-procedure/admin-remedies-labor-inspection" },
] as const

// 保險法下拉樹（可持續往下擴 children，支援多層）
const insuranceLawMenuTree: Array<{
  label: string
  href: string
  children?: Array<{ label: string; href: string; children?: any[] }>
}> = [
  {
    label: "理賠實務與保險法總則",
    href: "/law/insurance/claims-and-general",
    children: [
      { label: "告知義務", href: "/law/insurance/claims-and-general/disclosure-duty" },
      { label: "契約效力", href: "/law/insurance/claims-and-general/contract-validity" },
      { label: "爭議處理", href: "/law/insurance/claims-and-general/dispute-resolution" },
    ],
  },
  {
    label: "人身保險規劃",
    href: "/law/insurance/personal-insurance",
    children: [
      { label: "壽險", href: "/law/insurance/personal-insurance/life-insurance" },
      { label: "醫療險", href: "/law/insurance/personal-insurance/medical" },
      { label: "意外險", href: "/law/insurance/personal-insurance/accident" },
    ],
  },
  { label: "企業保險與責任險", href: "/law/insurance/corporate-liability" },
  { label: "金融消費者保護與法規", href: "/law/insurance/financial-consumer-protection" },
]

export function LawHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const isLabor = pathname === "/law/labor" || pathname.startsWith("/law/labor/")
  const isIndividualLabor = pathname === "/law/labor/individual" || pathname.startsWith("/law/labor/individual/")
  const isSocialLaw = pathname === "/law/labor/social" || pathname.startsWith("/law/labor/social/")
  const isCollectiveProcedure =
    pathname === "/law/labor/collective-procedure" || pathname.startsWith("/law/labor/collective-procedure/")
  const isInsuranceLaw = pathname === "/law/insurance" || pathname.startsWith("/law/insurance/")
  const isClaimsAndGeneral =
    pathname === "/law/insurance/claims-and-general" || pathname.startsWith("/law/insurance/claims-and-general/")
  const isPersonalInsurance =
    pathname === "/law/insurance/personal-insurance" || pathname.startsWith("/law/insurance/personal-insurance/")
  const isLaborRootPage = pathname === "/law/labor"
  const isInsuranceRootPage = pathname === "/law/insurance"
  const isDenseNav = isSocialLaw

  const goToParent = () => {
    const segments = pathname.split("/").filter(Boolean)

    // /law => 回到 / （主站）
    // /law/labor => 回到 /law
    const parentSegments = segments.length <= 1 ? [] : segments.slice(0, -1)
    const parentPath = parentSegments.length ? `/${parentSegments.join("/")}` : "/"

    router.push(parentPath)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-6 py-3">
        {/* Glassmorphism pill-shaped container */}
        <div className="w-full overflow-visible bg-white/80 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-5 shadow-lg border border-white/50">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo + Law button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AtomicHabitsWorld-3z8SeHYJL10EbNkkgMMxKYWJDZbFVn.png" 
                  alt="AtomicHabitsWorld Logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow object-cover"
                />
                <span className="text-lg sm:text-xl font-bold text-[#1A2744] tracking-wide">
                  每天一點點
                </span>
              </Link>

              <Link
                href="/law"
                className="hidden md:inline-flex items-center justify-center rounded-xl border-2 border-[#C85A5A] px-4 py-2.5 text-sm lg:text-base font-bold text-white shadow-md ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #101A3A 0%, #1A2744 55%, #0B1228 100%)",
                }}
              >
                <span className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_45%)]" />
                <span className="relative z-10 tracking-wide">法律</span>
              </Link>
            </div>

            {/* Navigation - Marble Category Pills */}
            <nav className="hidden md:flex flex-1 min-w-0 items-center justify-center px-2 pr-6">
              <div
                className={[
                  // 把 overflow 放到內層 wrapper，避免裁切按鈕上下（尤其是帶 dropdown 時）
                  "flex min-w-max items-center justify-center overflow-x-auto scrollbar-hide py-3",
                  isDenseNav ? "gap-2 lg:gap-2" : "gap-3 lg:gap-4",
                ].join(" ")}
              >
              {(
                isCollectiveProcedure
                  ? collectiveProcedureNavItems
                  : isClaimsAndGeneral
                    ? claimsGeneralNavItems
                  : isPersonalInsurance
                    ? personalInsuranceNavItems
                  : isInsuranceLaw
                    ? insuranceLawNavItems
                  : isSocialLaw
                    ? socialLawNavItems
                    : isIndividualLabor
                      ? individualLaborNavItems
                      : isLabor
                        ? laborNavItems
                        : mainNavItems
              ).map(
                (item) => {
                  const isLaborRoot = item.href === "/law/labor"
                  const isInsuranceRoot = item.href === "/law/insurance"
                  const hasLaborChildren =
                    !isLabor && isLaborRoot
                  const hasInsuranceChildren =
                    !isInsuranceLaw && isInsuranceRoot

                  const pillClass =
                    [
                      "group relative shrink-0 whitespace-nowrap rounded-full border border-[#C9BFB0] hover:border-[#8B7355] transition-all duration-300 ease-out hover:shadow-lg overflow-hidden",
                      isDenseNav ? "px-4 lg:px-4 py-2" : "px-6 lg:px-7 py-2.5",
                    ].join(" ")

                  const pillStyle = {
                    background: `linear-gradient(135deg, ${item.baseColor} 0%, ${item.accentColor} 50%, ${item.baseColor} 100%)`,
                  } as const

                  const marbleOverlay = (
                    <div
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 8px,
                          rgba(255,255,255,0.4) 8px,
                          rgba(255,255,255,0.4) 10px,
                          transparent 10px,
                          transparent 18px
                        ), repeating-linear-gradient(
                          -45deg,
                          transparent,
                          transparent 12px,
                          rgba(200,190,175,0.2) 12px,
                          rgba(200,190,175,0.2) 14px,
                          transparent 14px,
                          transparent 26px
                        )`,
                      }}
                    />
                  )

                  if (hasLaborChildren) {
                    return (
                      <MenuTreeDropdown
                        key={item.name}
                        nodes={laborMenuTree as any}
                        contentClassName="min-w-[16rem]"
                        openOnHover
                        trigger={
                          <Link href={item.href} className={pillClass} style={pillStyle}>
                            {marbleOverlay}
                            <span className="relative z-10 text-sm lg:text-base font-medium text-[#1A2744] font-serif">
                              {item.name}
                            </span>
                          </Link>
                        }
                      />
                    )
                  }

                  if (hasInsuranceChildren) {
                    return (
                      <MenuTreeDropdown
                        key={item.name}
                        nodes={insuranceLawMenuTree as any}
                        contentClassName="min-w-[18rem]"
                        openOnHover
                        trigger={
                          <Link href={item.href} className={pillClass} style={pillStyle}>
                            {marbleOverlay}
                            <span className="relative z-10 text-sm lg:text-base font-medium text-[#1A2744] font-serif">
                              {item.name}
                            </span>
                          </Link>
                        }
                      />
                    )
                  }

                  // /law/labor：三顆分類按鈕支援下拉到子分類
                  if (isLaborRootPage) {
                    const nodes =
                      item.href === "/law/labor/individual"
                        ? individualLaborMenuTree
                        : item.href === "/law/labor/social"
                          ? socialLawMenuTree
                          : item.href === "/law/labor/collective-procedure"
                            ? collectiveProcedureMenuTree
                            : null

                    if (nodes) {
                      return (
                        <MenuTreeDropdown
                          key={item.name}
                          nodes={nodes as any}
                          contentClassName="min-w-[18rem]"
                          openOnHover
                          trigger={
                            <Link href={item.href} className={pillClass} style={pillStyle}>
                              {marbleOverlay}
                              <span className="relative z-10 text-sm lg:text-base font-medium text-[#1A2744] font-serif">
                                {item.name}
                              </span>
                            </Link>
                          }
                        />
                      )
                    }
                  }

                  // /law/insurance：四顆分類按鈕若有 children，也可 hover 下拉到更深層
                  if (isInsuranceRootPage) {
                    const matchedInsuranceNode = insuranceLawMenuTree.find((n) => n.href === item.href)
                    const childNodes = matchedInsuranceNode?.children

                    if (childNodes && childNodes.length > 0) {
                      return (
                        <MenuTreeDropdown
                          key={item.name}
                          nodes={childNodes as any}
                          contentClassName="min-w-[18rem]"
                          openOnHover
                          trigger={
                            <Link href={item.href} className={pillClass} style={pillStyle}>
                              {marbleOverlay}
                              <span className="relative z-10 text-sm lg:text-base font-medium text-[#1A2744] font-serif">
                                {item.name}
                              </span>
                            </Link>
                          }
                        />
                      )
                    }
                  }

                  return (
                    <Link key={item.name} href={item.href} className={pillClass} style={pillStyle}>
                      {marbleOverlay}
                      <span className="relative z-10 text-sm lg:text-base font-medium text-[#1A2744] font-serif">
                        {item.name}
                      </span>
                    </Link>
                  )
                }
              )}
              </div>
            </nav>

            {/* Back to Parent Button - speckled texture */}
            <button
              type="button"
              className="hidden lg:flex flex-shrink-0 cursor-pointer items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md relative overflow-hidden"
              onClick={goToParent}
              style={{
                background: `linear-gradient(135deg, #A89880 0%, #8B7355 100%)`,
              }}
            >
              {/* Noise/speckled texture overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
              <svg className="w-4 h-4 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium text-white relative z-10">返回</span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-stone-100/50 transition-colors">
              <svg className="w-6 h-6 text-[#1A2744]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
