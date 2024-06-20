import { PromotionProvider } from '@plat/promotion'
import { headers } from 'next/headers'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const identifier = headers().get('identifier')
  console.log(identifier)
  return (
    <PromotionProvider identifier={identifier}>{children}</PromotionProvider>
  )
}

export default Layout
