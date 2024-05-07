export interface BottomNavigatorItem<T = any> {
  icon: React.ReactNode
  helpText: string
  value: T
}

export interface BottomNavigatorProps<T = any> {
  items: BottomNavigatorItem<T>[]
  value: T
}
