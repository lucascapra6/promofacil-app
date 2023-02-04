import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Spacing from 'themes/Spacing/spacing'
import Sizes from 'themes/Fonts/sizes'
import Colors from 'themes/Colors/colors'
import styled from 'styled-components/native'
import IosButtonStyled from '@components/Button/styles/iosButton'
type ButtonType = {
  label: string
  onPress: () => void
  buttonStyle?: object
  labelStyle?: object
  disabled?: boolean
  visible?: boolean
  secondary?: boolean
}
const IosButton = ({
  onPress,
  disabled,
  buttonStyle,
  labelStyle = styles.text,
  label,
  visible,
  secondary = false
}: ButtonType) => {
  return visible ? (
    <IosButtonStyled
      onPress={onPress}
      disabled={disabled}
      style={buttonStyle}
      secondary={secondary}>
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </IosButtonStyled>
  ) : (
    <View />
  )
}
const styles = StyleSheet.create({
  // button: {
  //   marginTop: Spacing.normal,
  //   alignSelf: 'center',
  //   padding: Spacing.normal,
  //   paddingRight: Spacing.large,
  //   paddingLeft: Spacing.large,
  //   borderRadius: 5,
  //   backgroundColor: Colors.secondary
  // },
  text: {
    fontSize: Sizes.medium,
    textTransform: 'uppercase',
    color: Colors.white,
    fontWeight: '500'
  }
})
const Button = styled.View`
  margin-top: 10px;
  align-self: center;
  padding-right: ${Spacing.large};
  padding-left: ${Spacing.large};
  border-radius: 5px;
  background-color: ${Colors.secondary};
`
export default IosButton
