'use client'

import { RestAPI } from '@modules/fetch'
import { KakaoLocalURI } from '@modules/kakao-local/uri'
import { useProcessEnv } from '@plat/process.env'

const KAKAO_LOCAL_API_ENDPOINT = 'https://dapi.kakao.com/v2/local'

export const useKakaoLocalApi = (): RestAPI<KakaoLocalURI> => {
  const { KAKAO_REST_API_KEY } = useProcessEnv()

  return new RestAPI<KakaoLocalURI>(KAKAO_LOCAL_API_ENDPOINT, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
    },
  })
}
