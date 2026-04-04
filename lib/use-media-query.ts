"use client"

import { useSyncExternalStore } from "react"

/** SSR 預設 false（偏手機），避免 hydration 與實際不符；hydrate 後依視窗更新。 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {}
      const mq = window.matchMedia(query)
      mq.addEventListener("change", onStoreChange)
      return () => mq.removeEventListener("change", onStoreChange)
    },
    () => (typeof window === "undefined" ? false : window.matchMedia(query).matches),
    () => false
  )
}
