import React from 'react'
import Label from '@components/Label'
type ProductPrice = {
  unitPrice: number | string
  quantity: number
}
const ProductPrice = ({unitPrice, quantity}: ProductPrice) => {
  const getPrice = (unitPrice: number | string) => {
    return (Number(unitPrice) * quantity).toFixed(2)
  }
  const price = getPrice(unitPrice)
  return <Label size={'small'}>R${price}</Label>
}
export default ProductPrice
