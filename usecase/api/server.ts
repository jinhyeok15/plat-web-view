import { RestAPI } from '@modules/fetch'
import { URI } from '@plat/api/resource'
import { getEnvironment } from '@plat/process.env'

const environ = getEnvironment()

const BASE_URL = environ.public.PLAT_API_URL as string

const api = new RestAPI<URI>(BASE_URL, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
