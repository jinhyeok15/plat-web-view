'use client'

import api, { APIClient } from '@plat/api'
import { createContext, useContext } from 'react'

export const ApiClientContext = createContext<APIClient>(api)

export const usePromotionApi = () => useContext(ApiClientContext)
