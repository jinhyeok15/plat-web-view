import { RestAPI } from '@modules/fetch'
import { URI } from '@plat/api/resource'
import { getProcessEnv } from '@plat/server/Environment'

const processEnv = getProcessEnv()

const BASE_URL = processEnv.PLAT_API_URL as string

const api = new RestAPI<URI>(BASE_URL, {
  credentials: 'include',
})

export default api
