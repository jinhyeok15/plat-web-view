export type PublicEnvKey =
  | 'KAKAO_JAVASCRIPT_APP_KEY'
  | 'PLAT_API_URL'
  | 'KAKAO_REST_API_KEY'

export type PublicProcessEnv = Record<PublicEnvKey, string | undefined>

export type ServerEnvKey = undefined

export type ProcessEnv = {
  server: {}
  public: PublicProcessEnv
}
