import React from 'react'
import exportedIcons from '@assets/Icons/iconsExported'
import {TouchableOpacity, View} from 'react-native'
import IIcons from '@interfaces/Icons'

const TouchableIcon = ({
  icon,
  color,
  width = 40,
  height = 40,
  onPress
}: IIcons) => {
  const Icon = exportedIcons[icon]
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon color={color} width={width} height={height} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
