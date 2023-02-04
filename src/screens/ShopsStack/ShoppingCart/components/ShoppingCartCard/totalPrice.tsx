import Label from '@components/Label'
import React from 'react'
type TotalPrice = {
  price: string | number
}
const TotalPrice = ({price}: TotalPrice) => {
  return <Label>{price}</Label>
}

export default TotalPrice
