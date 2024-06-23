'use client'

import { getEnvironment } from '@plat/process.env/getEnvironment'
import { PublicEnvKey, PublicProcessEnv } from '@plat/process.env/types'
import { createContext, useContext, useEffect, useState } from 'react'

type ProcessEnvContextValue = Record<PublicEnvKey, string>

export const ProcessEnvContext = createContext<
  ProcessEnvContextValue | undefined
>(undefined)

export const EnvironmentProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [processEnv, setProcessEnv] = useState<PublicProcessEnv | null>(null)

  useEffect(() => {
    const environ = getEnvironment()
    setProcessEnv(environ.public)
  }, [])

  if (!processEnv) return null

  const isEnvSettled = Object.values(processEnv).every(
    (value) => typeof value === 'string',
  )

  return (
    isEnvSettled && (
      <ProcessEnvContext.Provider value={processEnv as ProcessEnvContextValue}>
        {children}
      </ProcessEnvContext.Provider>
    )
  )
}

export const useProcessEnv = () => useContext(ProcessEnvContext)!
