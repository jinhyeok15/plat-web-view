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
    return redirect(`/promotions/market/${marketId}`)
  }

  if (res.status === 404) {
    return notFound()
  }

  throw new Error(res.statusText)
}

export default Page
