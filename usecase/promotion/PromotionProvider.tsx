'use client'

import api from '@plat/api'
import { ApiClientContext } from '@plat/promotion/apiClient'

type Props = {
  identifier: string | null
  children: React.ReactNode
}

export const PromotionProvider = ({ children, identifier }: Props) => {
  const headers: HeadersInit = {}
  if (identifier) {
    headers['identifier'] = identifier
  }
  return (
    <ApiClientContext.Provider
      value={api.getClient({
        headers,
      })}
    >
      {children}
    </ApiClientContext.Provider>
  )
}
