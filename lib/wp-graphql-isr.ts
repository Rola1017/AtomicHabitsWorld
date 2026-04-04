/** WordPress GraphQL fetch：ISR 快取 1 小時 */
export const wpGraphqlFetchNext = {
  next: { revalidate: 3600 },
} as const
