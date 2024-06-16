export const getProcessEnv = () => ({
  KAKAO_JAVASCRIPT_APP_KEY: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY,
  PLAT_API_URL: process.env.PLAT_API_URL,
})

const Environment = ({ children }: { children: React.ReactNode }) => {
  const processEnv = getProcessEnv()
  const isEnvSettled = Object.values(processEnv).every(
    (value) => typeof value === 'string',
  )
  return isEnvSettled && <>{children}</>
}

export default Environment
