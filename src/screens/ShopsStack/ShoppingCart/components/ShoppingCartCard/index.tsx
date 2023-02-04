import React, {createContext, useContext} from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Label from '@components/Label'
import ProductsCard from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/RenderProductsCard'
import Spacing from 'themes/Spacing/spacing'
import Colors from 'themes/Colors/colors'
import ShoppingCartContext from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/contexts/shoppingCartContext'
import AppImage from "@components/AppImage";
type Products = {
  id: string
  name: string
  unitPrice: number
  productImage: any
}
type ShoppingCardProps = {
  index: string
  marketImage: any
  total: number
  marketName: string
  products: Array<Products>
}
const ShoppingCartCard = ({
  index,
  marketImage,
  marketName,
  products,
  total
}: ShoppingCardProps) => {
  const shoppingCartProps = {index, marketImage, marketName, total}
  return (
    <ShoppingCartContext.Provider value={shoppingCartProps}>
      <View style={styles.container}>
        <AppImage width={100} height={100} style={styles.image} source={marketImage} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Label style={{flex: 2}} size={'medium'}>
            {marketName}
          </Label>
          <Label size={'medium'} fontWeight={'bold'}>
            R${total.toFixed(2)}
          </Label>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <ProductsCard
            productImage={item.productImage}
            name={item.name}
            unitPrice={item.unitPrice}
            total={total}
          />
        )}
      />
    </ShoppingCartContext.Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Spacing.normal,
    marginTop: Spacing.normal
  },
  image: {marginRight: Spacing.normal}
})
export default ShoppingCartCard
