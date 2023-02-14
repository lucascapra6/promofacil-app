import React, {Dispatch, useEffect} from 'react'
import Screen from '@components/Screen'
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native'
import Label from '@components/Label'
import ShoppingCartCard from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@store/configureStore'
import {setItemsInShoppingCart} from '@store/actions/ShoppingCartActions'
import Button from '@components/Button'
import Colors from 'themes/Colors/colors'
import Weights from 'themes/Fonts/weights'
import {setInCart} from "@store/reducers/ShoppingCartReducer";
const ShoppingCart = () => {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(setItemsInShoppingCart(mock))
  }, [])

  const mock = [
    {
      id: '1',
      marketImage: require('../../../assets/Logos/carrefour.jpeg'),
      marketName: 'Mercado Carrefour',
      total: 55,
      products: [
        {
          id: '1',
          name: 'Picanha Sadia',
          unitPrice: 35.0,
          productImage: require('../../../assets/Logos/21c186d7b2ef963b7a95a4cc90709c4cb64c17e8.png')
        },
        {
          id: '2',
          name: 'Arroz Rei Arthur',
          unitPrice: 20.0,
          productImage: require('../../../assets/Logos/arroz-rei-arthur-5kg.png')
        }
      ]
    },
    {
      id: '2',
      marketImage: require('../../../assets/Logos/carrefour.jpeg'),
      marketName: 'Mercado Carrefour',
      total: 55,
      products: [
        {
          id: '1',
          name: 'Picanha Sadia',
          unitPrice: 35.0,
          productImage: require('../../../assets/Logos/21c186d7b2ef963b7a95a4cc90709c4cb64c17e8.png')
        },
        {
          id: '2',
          name: 'Arroz Rei Arthur',
          unitPrice: 20.0,
          productImage: require('../../../assets/Logos/arroz-rei-arthur-5kg.png')
        }
      ]
    }
  ]

  const {shoppingCardData} = useSelector(
    (state: RootState) => state.shoppingCart
  )
  return (
    <Screen>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Label size={'large'} fontWeight={'bold'}>
            Carrinho
          </Label>
        )}
        data={shoppingCardData}
        keyExtractor={({id}) => id}
        renderItem={({item, index}) => (
          <ShoppingCartCard
            index={index.toString()}
            total={item.total}
            marketImage={item.marketImage}
            marketName={item.marketName}
            products={item.products}
          />
        )}
        ListFooterComponent={() => (
          <Button
            buttonStyle={styles.button}
            labelStyle={styles.buttonLabelStyle}
            label={'FINALIZAR COMPRA'}
            onPress={() => {}}
          />
        )}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderWidth: 0
  },
  buttonLabelStyle: {
    fontWeight: Weights.bold
  }
})
export default ShoppingCart
