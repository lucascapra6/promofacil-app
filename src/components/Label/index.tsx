import React from 'react'
import {Text, View} from 'react-native'
import Sizes from 'themes/Fonts/sizes'
import Weights from 'themes/Fonts/weights'
import Colors from 'themes/Colors/colors'

type LabelType = {
  children: string | number | React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'black' | 'white'
  fontWeight?: 'normal' | 'bold'
  visible?: boolean
  style?: object
    testID?:string
}

const Label = ({
  children,
  size = 'small',
  color = 'black',
  fontWeight = 'normal',
  visible = true,
  style,
}: LabelType) => {
  return visible ? (
    <Text
        testID="app-label"
      style={{
        fontSize: Sizes[size],
        color: Colors[color],
        fontWeight: Weights[fontWeight],
        ...style
      }}>
      {children}
    </Text>
  ) : (
    <View />
  )
}
export default Label
