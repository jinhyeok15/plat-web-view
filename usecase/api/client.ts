'use client'

import { RestAPI } from '@modules/fetch'
import { URI } from '@plat/api/resource'
import { useProcessEnv } from '@plat/process.env'

export type APIClient = RestAPI<URI>

export const useApi = (): APIClient => {
  const { PLAT_API_URL } = useProcessEnv()

  return new RestAPI<URI>(PLAT_API_URL, {
    credentials: 'include',
  })
}
