'use client'

import {
  EnvironmentProvider,
  ProcessEnvContext,
} from '@plat/process.env/provider'
import { useContext } from 'react'

export const useProcessEnv = () => useContext(ProcessEnvContext)!

export { EnvironmentProvider }
