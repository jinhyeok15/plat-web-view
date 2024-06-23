import { RestAPI } from '@modules/fetch'
import { URI } from '@plat/api/resource'
import { getProcessEnv } from '@plat/process.env/server'

const processEnv = getProcessEnv()

const BASE_URL = processEnv.PLAT_API_URL as string

const api = new RestAPI<URI>(BASE_URL, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
