'use client'

import { Tab } from '@plat-ui/Tab'

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Tab>
        <Tab.Item />
        <Tab.Item />
        <Tab.Item />
        <div />
      </Tab>
    </>
  )
}

export default Template
