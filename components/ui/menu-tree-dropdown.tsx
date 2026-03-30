"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type MenuTreeNode = {
  label: string
  href?: string
  children?: MenuTreeNode[]
}

function MenuTreeItems({ nodes }: { nodes: MenuTreeNode[] }) {
  const router = useRouter()

  return nodes.map((node) => {
    const hasChildren = !!node.children?.length

    if (hasChildren) {
      return (
        <DropdownMenuSub key={node.label}>
          <DropdownMenuSubTrigger
            // 讓父項可點擊導頁；同時保留 hover 開子選單
            onClick={() => {
              if (!node.href) return
              router.push(node.href)
            }}
          >
            {node.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[14rem]">
            <MenuTreeItems nodes={node.children!} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      )
    }

    // leaf
    return (
      <DropdownMenuItem key={node.label} asChild>
        <Link href={node.href ?? "#"}>{node.label}</Link>
      </DropdownMenuItem>
    )
  })
}

export function MenuTreeDropdown({
  trigger,
  nodes,
  contentClassName,
  openOnHover = false,
}: {
  trigger: React.ReactNode
  nodes: MenuTreeNode[]
  contentClassName?: string
  openOnHover?: boolean
}) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const scheduleClose = () => {
    if (!openOnHover) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    // 給使用者從 trigger 移動到選單的緩衝時間，避免抖動/點不到
    closeTimer.current = window.setTimeout(() => setOpen(false), 220)
  }

  const cancelClose = () => {
    if (!openOnHover) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  return (
    <div
      onPointerEnter={() => {
        if (!openOnHover) return
        cancelClose()
        setOpen(true)
      }}
      onPointerLeave={scheduleClose}
    >
    {/* modal={false} 取消 scroll lock，避免捲軸消失造成版面位移與 hover 閃爍 */}
    <DropdownMenu
      modal={false}
      open={openOnHover ? open : undefined}
      onOpenChange={openOnHover ? setOpen : undefined}
    >
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      {/* overflow-visible: 允許 SubContent 往外延伸（支援多層選單） */}
      <DropdownMenuContent
        align="start"
        onPointerEnter={cancelClose}
        onPointerLeave={scheduleClose}
        className={["overflow-visible", contentClassName].filter(Boolean).join(" ")}
      >
        <MenuTreeItems nodes={nodes} />
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

