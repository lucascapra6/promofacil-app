import React, {useCallback, useContext, useMemo, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Label from '@components/Label'
import Spacing from 'themes/Spacing/spacing'
import Colors from 'themes/Colors/colors'
import QuantityControls from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/QuantityControls'
import ProductPrice from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/ProductPrice'
import AppImage from "@components/AppImage";

type ProductsProps = {
  name: string
  unitPrice: string | number
  productImage: any
  total: number
}

const ProductsCard = ({name, unitPrice, productImage}: ProductsProps) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <View>
      <View style={styles.rowContainer}>
        <AppImage
            width={85}
            height={100}
            style={styles.image}
            source={productImage}
        />
        <Label style={{flex: 2}}>{name}</Label>
        <ProductPrice unitPrice={unitPrice} quantity={quantity} />
      </View>
      <QuantityControls
        setQuantity={setQuantity}
        quantity={quantity}
        unitPrice={unitPrice}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingHorizontal: 10
  },
  image: {
    width: 85,
    height: 100,
    marginRight: Spacing.normal,
    marginTop: 10
  }
})
export default ProductsCard
