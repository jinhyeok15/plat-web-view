import { EnvironmentProvider } from '@plat/process.env'

const RootTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <EnvironmentProvider>{children}</EnvironmentProvider>
}

export default RootTemplate
