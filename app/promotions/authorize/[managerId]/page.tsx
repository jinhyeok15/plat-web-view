import api from '@plat/api'
import { notFound, redirect } from 'next/navigation'

interface PageProps {
  params: {
    managerId: string
  }
}

const Page = async ({ params }: PageProps) => {
  const res = await api.fetch('/promotions/market-access', 'GET', {
    headers: {
      identifier: params.managerId,
    },
  })

  if (res.status === 200) {
    const marketId = await res.json()
    return marketId
      ? redirect(`/promotions/market/${marketId}`)
      : redirect(`/promotions/market/registration`)
  }

  if (res.status >= 400) {
    return notFound()
  }

  if (res.status >= 500) {
    throw new Error(res.statusText)
  }
}

export default Page
