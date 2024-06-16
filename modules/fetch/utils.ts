import { UrlQuery } from '@modules/fetch/api'

export function formatUri<URI extends string>(
  uri: URI,
  query?: UrlQuery,
): string {
  if (!query) {
    return uri
  }

  // Replace path params in URI
  let formattedUri = uri.replace(/{([^}]+)}/g, (_, key) => {
    const value = query[key]
    delete query[key]
    return String(value)
  })

  // Add query parameters to URI
  const queryParams = Object.entries(query)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
          .join('&')
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      }
    })
    .join('&')

  if (queryParams) {
    formattedUri += `?${queryParams}`
  }

  return formattedUri
}
