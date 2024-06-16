export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type UrlQuery = Record<string, string | number | string[]>

export interface FetchConfig<URI extends string> extends RequestInit {
  uri: URI
  method: HttpMethod
  query?: UrlQuery
}

export type RequestOption = Omit<RequestInit, 'method'> & {
  query?: UrlQuery
}
