import React from 'react'
import exportedIcons from '@assets/Icons/iconsExported'
import {TouchableOpacity, View} from 'react-native'
import IIcons from '@interfaces/Icons'

const TouchableIcon = ({
  icon,
  color,
  width = 40,
  height = 40,
  onPress,
    testID
}: IIcons) => {
  const Icon = exportedIcons[icon]
  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <Icon color={color} width={width} height={height} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
