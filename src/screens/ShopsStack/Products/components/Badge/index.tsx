import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Colors from 'themes/Colors/colors'
type BadgeProps = {
  label: string
}

export default function Badge({label}: BadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    top: 10,
    right: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    backgroundColor: Colors.success,
    borderRadius: 3
  },
  text: {color: Colors.white}
})
