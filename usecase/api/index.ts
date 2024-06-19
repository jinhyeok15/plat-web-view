import { RestAPI as _RestAPI } from '@modules/fetch'
import { FetchConfig } from '@modules/fetch/api'
import { URI } from '@plat/api/resource'
import { getProcessEnv } from '@plat/server/Environment'

const processEnv = getProcessEnv()

const BASE_URL = processEnv.PLAT_API_URL as string

class RestAPI extends _RestAPI<URI> {
  constructor(baseUrl: string, init?: Partial<FetchConfig<URI>>) {
    super(baseUrl, init)
  }

  getClient(config?: Partial<FetchConfig<URI>>) {
    return new _RestAPI(BASE_URL, config)
  }
}

const api = new RestAPI(BASE_URL, {
  credentials: 'include',
})

export default api
