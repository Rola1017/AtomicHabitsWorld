/** WordPress GraphQL fetch：ISR 快取 1 小時 */
export const wpGraphqlFetchNext = {
  next: { revalidate: 3600 },
} as const

/** WordPress GraphQL fetch：即時模式（不快取） */
export const wpGraphqlNoStore = {
  cache: "no-store",
} as const
