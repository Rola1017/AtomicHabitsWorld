"use client"

import Image from "next/image"
import Link from "next/link"

import { MenuTreeDropdown } from "@/components/ui/menu-tree-dropdown"

const navItems = [
  // 高對比交錯配色（確保相鄰按鈕色系明顯不同）
  { label: "法律", href: "/law", bgColor: "rgba(222,230,255,.98)" }, // 淡藍紫
  { label: "閱讀", href: "#", bgColor: "rgba(255,243,196,.98)" }, // 奶油黃
  { label: "科技", href: "#", bgColor: "rgba(215,243,234,.98)" }, // 薄荷綠
  { label: "學習技巧", href: "#", bgColor: "rgba(240,224,255,.98)" }, // 薰衣草紫
  { label: "日常", href: "/daily", bgColor: "rgba(255,226,210,.98)" }, // 暖桃色
]

const lawMenuTree = [
  {
    label: "勞動社會法",
    href: "/law/labor",
    children: [
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
    ],
  },
  {
    label: "保險法",
    href: "/law/insurance",
    children: [
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
    ],
  },
  { label: "民法", href: "/law/civil" },
  { label: "行政法", href: "/law/administrative" },
  { label: "刑法", href: "/law/criminal" },
  { label: "民事訴訟法", href: "/law/civil-procedure" },
] as const

const dailyMenuTree = [
  { label: "考試", href: "/daily/exam" },
  { label: "生活智慧王", href: "/daily/life-wisdom" },
  { label: "左手訓練", href: "/daily/left-hand-writing" },
] as const

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-3">
          {/* Logo + Site Name */}
          <Link href="/" className="flex-shrink-0 inline-flex items-center gap-2 -ml-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AtomicHabitsWorld-OV1EpY5UU1vffttWVWCcHGOdrWoPSF.png"
              alt="AtomicHabitsWorld Logo"
              width={42}
              height={42}
              className="rounded-lg"
            />
            <span className="text-[#101A3A] text-lg font-semibold whitespace-nowrap">每天一點點</span>
          </Link>

          {/* Navigation Items (centered) */}
          <div className="flex-1 min-w-0 flex justify-center">
            <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide px-1">
              {navItems.map((item) =>
                item.label === "法律" ? (
                  <MenuTreeDropdown
                    key={item.label}
                    nodes={lawMenuTree as any}
                    openOnHover
                    contentClassName="min-w-[16rem]"
                    trigger={
                      <Link
                        href={item.href}
                        style={{ backgroundColor: item.bgColor }}
                        className="inline-flex cursor-pointer items-center py-2.5 px-6 rounded-full border border-[#101A3A]/15 text-lg font-medium whitespace-nowrap text-[#101A3A] shadow-sm ring-1 ring-black/5 hover:opacity-80 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    }
                  />
                ) : item.label === "日常" ? (
                  <MenuTreeDropdown
                    key={item.label}
                    nodes={dailyMenuTree as any}
                    openOnHover
                    contentClassName="min-w-[14rem]"
                    trigger={
                      <Link
                        href={item.href}
                        style={{ backgroundColor: item.bgColor }}
                        className="inline-flex cursor-pointer items-center py-2.5 px-6 rounded-full border border-[#101A3A]/15 text-lg font-medium whitespace-nowrap text-[#101A3A] shadow-sm ring-1 ring-black/5 hover:opacity-80 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    }
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      backgroundColor: item.bgColor,
                    }}
                    className="inline-flex items-center py-2.5 px-6 rounded-full border border-[#101A3A]/15 text-lg font-medium whitespace-nowrap text-[#101A3A] shadow-sm ring-1 ring-black/5 hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
