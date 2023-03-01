import React from 'react'
import {View} from 'react-native'
import Spacing from 'themes/Spacing/spacing'
import StyledView from '@components/Screen/style'
type ViewContainerType = {
  children: React.ReactNode
  padding?: 'small' | 'normal' | 'large',
}

const Screen = ({children, padding = 'normal'}: ViewContainerType) => (
  <StyledView testID="styled-screen-view">
    <View testID="screen-view" style={{padding: Spacing[padding]}}>{children}</View>
  </StyledView>
)
export default Screen
