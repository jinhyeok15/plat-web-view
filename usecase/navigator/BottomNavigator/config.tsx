'use client'

import { BottomNavigatorItem } from '@plat/navigator/BottomNavigator/api'

const items: BottomNavigatorItem[] = []

enum TabValue {
  Location = 'loc',
  Saved = 'saved',
  My = 'my',
}

const config = {
  items,
  TabValue,
}

export default config
