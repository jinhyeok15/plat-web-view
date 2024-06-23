import type { ProcessEnv } from '@plat/process.env/types'

export const getEnvironment = (): ProcessEnv => {
  return {
    public: {
      KAKAO_JAVASCRIPT_APP_KEY:
        process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY,
      PLAT_API_URL: process.env.NEXT_PUBLIC_PLAT_API_URL,
      KAKAO_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
    },
    server: {},
  }
}
