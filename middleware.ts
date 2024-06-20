import { NextRequest, NextResponse, userAgent } from 'next/server'

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl
  const userAgentPayload = userAgent(request)
  url.searchParams.set('userAgent', JSON.stringify(userAgentPayload))

  if (url.pathname.startsWith('/promotions/authorize')) {
    const response = NextResponse.next()

    const managerId = url.pathname.split('/').filter(Boolean).at(-1)
    if (managerId) response.cookies.set('identifier', managerId)

    return response
  }
  return NextResponse.rewrite(url)
}
