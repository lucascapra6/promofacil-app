import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import React from 'react'
import Spacing from 'themes/Spacing/spacing'
import Badge from '../Badge'
import Colors from 'themes/Colors/colors'
import Button from '@components/Button'
import AppImage from "@components/AppImage";

type ProductProps = {
  product: {
    name: string
    price: number | string
    promotionalPrice: number | string
    measurementUnity: string
    measurementUnityValue: number | string
    productImage: any
  }
  onPress?: () => void
}

export default function ProductCard({product}: ProductProps) {
  return (
    <View
      style={{
        marginRight: 15,
        marginBottom: 15,
        flex: 1,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
      <View>
        <AppImage
            width={100}
            height={100}
          style={{
            marginTop: 45,
            marginLeft: 10
          }}
          source={product.productImage}
        />
        <Badge label={'Promoção'} />
      </View>
      <View style={{padding: 15}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: Colors.black
          }}>
          {product.name}
        </Text>
        <Text
          style={{
            color: Colors.black
          }}>{`${product.measurementUnityValue}${product.measurementUnity}`}</Text>
        <Text
          style={{
            marginBottom: 5,
            marginTop: 15,
            fontSize: 18,
            textAlign: 'right',
            fontWeight: '500',
            color: Colors.success
          }}>{`R$ ${product.promotionalPrice}`}</Text>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '500',
            textDecorationLine: 'line-through',
            color: Colors.primary
          }}>{`R$ ${product.price}`}</Text>
        <Button
          label={'Adicionar'}
          onPress={() => {}}
          buttonStyle={{
            width: '100%',
            borderColor: Colors.primary,
            backgroundColor: Colors.primary,
            padding: 5,
            marginTop: 30
          }}
          labelStyle={{fontSize: 14, textAlign: 'center', color: Colors.white}}
        />
      </View>
    </View>
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
    fontSize: 30,
    color: 'white'
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    color: 'white'
  }
})
