import React from 'react'
import {StyleSheet} from 'react-native'
import Colors from 'themes/Colors/colors'
import DevicePlatform from '@utils/Platform/devicePlatform'
import AndroidButton from '@components/Button/AndroidButton'
import IosButton from '@components/Button/IOSButton'
type ButtonType = {
  label: string
  onPress: (...args: any[]) => void;
  buttonStyle?: object
  labelStyle?: object
  disabled?: boolean
  visible?: boolean
  secondary?: boolean,
  testID?: string,
  isAndroid?: boolean
}
const platform = new DevicePlatform()

const Button = ({
  onPress,
  label,
  buttonStyle,
  labelStyle,
  disabled = false,
  visible = true,
  secondary,
   isAndroid = platform.isAndroid(),
    testID
}: ButtonType) => {
  return isAndroid ? (
    <AndroidButton
      label={label}
      buttonStyle={buttonStyle}
      labelStyle={labelStyle}
      disabled={disabled}
      onPress={onPress}
      secondary={secondary}
      testID="android-button"
    />
  ) : (
    <IosButton
      onPress={onPress}
      buttonStyle={buttonStyle}
      labelStyle={labelStyle}
      disabled={disabled}
      label={label}
      visible={visible}
      secondary={secondary}
      testID="ios-button"
    />
  )
}
export default Button
