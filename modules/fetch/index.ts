import { HttpMethod, FetchConfig, RequestOption } from '@modules/fetch/api'
import { formatUri } from '@modules/fetch/utils'

export class RestAPI<URI extends string> {
  private baseUrl: string = ''
  private config: Partial<FetchConfig<URI>> = {}

  constructor(baseUrl: string, init?: Partial<FetchConfig<URI>>) {
    this.baseUrl = baseUrl
    if (init) this.config = init
  }

  fetch(uri?: URI, method?: HttpMethod, opt: RequestOption = {}) {
    if (typeof uri !== 'string' && typeof this.config.uri !== 'string') {
      throw new Error('uri를 입력하지 않았습니다.')
    }

    const url =
      this.baseUrl + formatUri((uri ?? this.config.uri) as URI, opt.query)

    return fetch(url, {
      ...this.config,
      method: method ?? this.config.method ?? 'GET',
      ...opt,
    })
  }

  getClient(init?: { baseUrl?: string; config?: RequestOption }) {
    if (!init) {
      return this
    }

    const { baseUrl, config } = init

    this.config = {
      ...this.config,
      ...config,
      headers: {
        ...this.config.headers,
        ...config?.headers,
      },
    }

    this.baseUrl = baseUrl ?? this.baseUrl

    return new RestAPI(this.baseUrl, this.config)
  }
}
