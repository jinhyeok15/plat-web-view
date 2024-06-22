export const getProcessEnv = () => ({
  KAKAO_JAVASCRIPT_APP_KEY: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY,
  PLAT_API_URL: process.env.PLAT_API_URL,
  KAKAO_REST_API_KEY: process.env.KAKAO_REST_API_KEY,
})

const Environment = ({ children }: { children: React.ReactNode }) => {
  const processEnv = getProcessEnv()
  const isEnvSettled = Object.values(processEnv).every(
    (value) => typeof value === 'string',
  )
  return isEnvSettled && <>{children}</>
}

export default Environment
