import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import Spacing from 'themes/Spacing/spacing'
import Colors from 'themes/Colors/colors'

type ViewContainerType = {
  children: React.ReactNode
  padding?: 'small' | 'normal' | 'large'
}

const ScrollScreen = ({children, padding = 'normal'}: ViewContainerType) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.viewContaier, {padding: Spacing[padding]}]}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewContaier: {
    flex: 1,
    backgroundColor: Colors.background
  }
})
export default ScrollScreen
