'use client'

import { Children } from 'react'
import Item from '@plat-ui/Tab/Item'

export interface TabProps<T = any> {
  variant?: 'outline' | 'underline'
  value?: T
  className?: string
  children?: React.ReactNode
}

export const Tab = ({ variant, value, className, children }: TabProps) => {
  const arrayChildren = Children.toArray(children) as React.ReactElement[]
  const items = arrayChildren.filter((v) => v.type === Item)
  return <div>{items}</div>
}

Tab.Item = Item
