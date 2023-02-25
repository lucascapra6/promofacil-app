import {ViewStyle, TextStyle, TouchableNativeFeedback} from 'react-native'
import React from 'react'
import AndroidButtonStyled from '@components/Button/styles/androidButton'
import ButtonText from '@components/Button/styles/buttonText'
type ButtonProps = {
  buttonStyle?: ViewStyle
  labelStyle?: TextStyle
  label: string
  onPress?: () => void
  disabled?: boolean
  visible?: boolean
  secondary?: boolean,
  testID?: string
}

export default function AndroidButton({
  buttonStyle,
  labelStyle,
  label = 'button',
  onPress,
  disabled = false,
  visible = true,
  secondary = false,
}: ButtonProps) {
  return visible ? (
    <TouchableNativeFeedback testID="my-button" onPress={onPress} disabled={disabled}>
      <AndroidButtonStyled secondary={secondary} style={buttonStyle}>
        <ButtonText style={labelStyle}>{label}</ButtonText>
      </AndroidButtonStyled>
    </TouchableNativeFeedback>
  ) : (
    <></>
  )
}
