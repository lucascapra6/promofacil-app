import {Image, ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import React from 'react'
import Spacing from 'themes/Spacing/spacing'
import Colors from "themes/Colors/colors";
import {Loading} from "@components/Loading";
import FastImage from 'react-native-fast-image'
type SectionCard = {
  label: string
  numberOfItens?: string | number
  onPress?: () => void
  imageUrl: string,
  isLoading: boolean
}

export default function SectionCard({
  onPress,
  label,
    imageUrl,
    isLoading
}: SectionCard) {
  const image = {uri: imageUrl || ''};
  return (
      isLoading ? <Loading/> : <TouchableNativeFeedback onPress={onPress}>
        <ImageBackground source={image} style={styles.card}>
          <Text onPress={onPress} style={styles.label}>{label}</Text>
        </ImageBackground>
      </TouchableNativeFeedback>
  )
}
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
    paddingTop: 100,
    paddingBottom: 100,
    marginBottom: Spacing.normal
  },
  label: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    width:"100%"
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    color: 'white'
  }
})
