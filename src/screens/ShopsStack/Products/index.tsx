import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Label from '@components/Label'
import ProductCard from './components/ProductCard'
import Screen from '@components/Screen'
import Button from '@components/Button'

export default function Products() {
  const productList = [
    {
      isPromotional: true,
      name: 'Arroz Rei Arthur',
      measurementUnity: 'kg',
      measurementUnityValue: 5,
      price: '22,90',
      promotionalPrice: '15,00',
      productImage: require('../../../assets/Logos/arroz-rei-arthur-5kg.png')
    },
    {
      isPromotional: true,
      name: 'Picanha Sadia',
      measurementUnity: 'kg',
      measurementUnityValue: 1,
      price: '22,90',
      promotionalPrice: '15,00',
      productImage: require('../../../assets/Logos/21c186d7b2ef963b7a95a4cc90709c4cb64c17e8.png')
    },
    {
      isPromotional: true,
      name: 'Arroz Rei Arthur',
      measurementUnity: 'kg',
      measurementUnityValue: 5,
      price: '22,90',
      promotionalPrice: '15,00',
      productImage: require('../../../assets/Logos/arroz-rei-arthur-5kg.png')
    },
    {
      isPromotional: true,
      name: 'Picanha Sadia',
      measurementUnity: 'kg',
      measurementUnityValue: 1,
      price: '22,90',
      promotionalPrice: '15,00',
      productImage: require('../../../assets/Logos/21c186d7b2ef963b7a95a4cc90709c4cb64c17e8.png')
    },
    {
      isPromotional: true,
      name: 'Arroz Rei Arthur',
      measurementUnity: 'kg',
      measurementUnityValue: 5,
      price: '22,90',
      promotionalPrice: '15,00',
      productImage: require('../../../assets/Logos/arroz-rei-arthur-5kg.png')
    }
  ]

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{marginBottom: 20}}>
            <Label size="large" color="black" fontWeight="bold">
              Produtos
            </Label>
          </View>
        )}
        numColumns={2}
        data={productList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductCard product={item} />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
