'use client'

import type { APIClient } from '@plat/api'
import { createContext, useContext } from 'react'

export const ApiClientContext = createContext<APIClient | undefined>(undefined)

export const usePromotionApi = () => useContext(ApiClientContext)!
