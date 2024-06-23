import { PromotionProvider } from '@plat/promotion'
import { cookies } from 'next/headers'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const identifier = cookies().get('identifier')?.value ?? null

  return (
    <PromotionProvider identifier={identifier}>{children}</PromotionProvider>
  )
}

export default Layout
