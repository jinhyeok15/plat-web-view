'use client'

import type { GeolocationOptions } from '@modules/geolocation'
import { useProcessEnv } from '@plat/process.env'

const geolocation: GeolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 5000,
} as const

export const useKakaoOptions = () => {
  const processEnv = useProcessEnv()
  const kakao = {
    apiKey: processEnv.KAKAO_JAVASCRIPT_APP_KEY,
    zoom: 3,
  } as const

  return {
    geolocation,
    kakao,
  }
}
