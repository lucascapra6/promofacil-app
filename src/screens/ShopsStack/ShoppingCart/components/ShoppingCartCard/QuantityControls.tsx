import React, {useCallback, useContext, useEffect, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Colors from 'themes/Colors/colors'
import Label from '@components/Label'
import {Dispatch, SetStateAction} from 'react'
import shoppingCartContext from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/contexts/shoppingCartContext'
import {useDispatch} from 'react-redux'
import {
  decrementTotal,
  increaseTotal
} from '@store/reducers/ShoppingCartReducer'
import shoppingCardContext from '@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/contexts/shoppingCartContext'
type QuantityControls = {
  setQuantity: Dispatch<SetStateAction<number>>
  unitPrice: string | number
  quantity: number
}
const QuantityControls = ({
  unitPrice,
  quantity,
  setQuantity
}: QuantityControls) => {
  const {index} = useContext(shoppingCardContext)
  const dispatch = useDispatch()
  const handleMinusButton = useCallback(() => {
    if (quantity > 0) {
      setQuantity(prevState => prevState - 1)
      const payload = {index: index, itemPrice: unitPrice}
      dispatch(decrementTotal(payload))
    }
  }, [quantity])

  const handlePlusButton = useCallback(() => {
    setQuantity(prevState => prevState + 1)
    const payload = {index: index, itemPrice: unitPrice}
    dispatch(increaseTotal(payload))
  }, [quantity])
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleMinusButton} testID="handleMinusButton">
          <Label size={'large'}>-</Label>
        </TouchableOpacity>
        <Label size={'medium'}>{quantity}</Label>
        <TouchableOpacity onPress={handlePlusButton} testID="handlePlusButton">
          <Label size={'large'}>+</Label>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
export default QuantityControls
