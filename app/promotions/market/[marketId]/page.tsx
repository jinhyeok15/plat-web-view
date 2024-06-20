import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    marketId: string
  }
}

const Page = ({ params }: PageProps) => {
  const managerId = cookies().get('identifier')?.value
  if (!managerId) {
    return notFound()
  }
  return <></>
}

export default Page
