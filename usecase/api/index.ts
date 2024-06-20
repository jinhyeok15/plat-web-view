import { RestAPI as _RestAPI } from '@modules/fetch'
import { FetchConfig } from '@modules/fetch/api'
import { URI } from '@plat/api/resource'
import { getProcessEnv } from '@plat/server/Environment'

const processEnv = getProcessEnv()

const BASE_URL = processEnv.PLAT_API_URL as string

export class APIClient extends _RestAPI<URI> {
  constructor(baseUrl: string, init?: Partial<FetchConfig<URI>>) {
    super(baseUrl, init)
  }
}

const api = new APIClient(BASE_URL, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
