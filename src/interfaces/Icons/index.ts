import React from 'react'
interface IIcons {
  icon:
    | 'CartIcon'
    | 'SearchIcon'
    | 'ShopsIcon'
    | 'PreferencesIcon'
    | 'SettingsIcon'
  width?: number
  height?: number
  color: string
  onPress?: () => void
  style?: object,

  testID?: string
}

export default IIcons
