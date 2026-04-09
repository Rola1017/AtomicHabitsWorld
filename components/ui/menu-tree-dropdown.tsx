"use client"

import { useRef, useState } from "react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@/lib/use-media-query"

export type MenuTreeNode = {
  label: string
  href?: string
  children?: MenuTreeNode[]
}

function MenuTreeItems({ nodes }: { nodes: MenuTreeNode[] }) {
  return nodes.map((node) => {
    const hasChildren = !!node.children?.length

    if (hasChildren) {
      return (
        <DropdownMenuSub key={node.label}>
          <DropdownMenuSubTrigger>
            {node.href ? (
              <Link href={node.href} className="flex-1">
                {node.label}
              </Link>
            ) : (
              node.label
            )}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[14rem]">
            <MenuTreeItems nodes={node.children!} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      )
    }

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
  const isMdUp = useMediaQuery("(min-width: 768px)")
  const hoverMode = Boolean(openOnHover && isMdUp)

  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const scheduleClose = () => {
    if (!hoverMode) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 220)
  }

  const cancelClose = () => {
    if (!hoverMode) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  const menu = (
    <DropdownMenu
      modal={!hoverMode}
      open={hoverMode ? open : undefined}
      onOpenChange={hoverMode ? setOpen : undefined}
    >
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={4}
        onPointerEnter={hoverMode ? cancelClose : undefined}
        onPointerLeave={hoverMode ? scheduleClose : undefined}
        className={["overflow-visible", contentClassName].filter(Boolean).join(" ")}
      >
        <MenuTreeItems nodes={nodes} />
      </DropdownMenuContent>
    </DropdownMenu>
  )

  if (!hoverMode) {
    return menu
  }

  return (
    <div
      onPointerEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onPointerLeave={scheduleClose}
    >
      {menu}
    </div>
  )
}
