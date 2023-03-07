import React from 'react'
import exportedIcons from '@assets/Icons/iconsExported'
import {TouchableOpacity, View} from 'react-native'
import IIcons from '@interfaces/Icons'

const ViewableIcon = ({
  icon,
  color,
  width = 40,
  height = 40,
  style
}: IIcons) => {
  const Icon = exportedIcons[icon]
  return (
    <View style={style} testID="viewable-icon">
      <Icon color={color} width={width} height={height} />
    </View>
  )
}

export default ViewableIcon
