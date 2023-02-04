import {createSlice} from '@reduxjs/toolkit'
type Products = {
  id: string
  name: string
  unitPrice: number
  productImage: any
}
type ShoppingCartSlice = {
  shoppingCardData: Array<{
    id: string
    marketImage: any
    marketName: string
    total: number
    products: Array<Products>
  }>
}

const initialState: ShoppingCartSlice = {
  shoppingCardData: []
}
const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    setInCart(state, action) {
      state.shoppingCardData = action.payload
    },
    increaseTotal(state, action) {
      const {index, itemPrice} = action.payload
      state.shoppingCardData[index].total =
        Number(state.shoppingCardData[index].total) + Number(itemPrice)
    },
    decrementTotal(state, action) {
      const {index, itemPrice} = action.payload
      state.shoppingCardData[index].total =
        Number(state.shoppingCardData[index].total) - Number(itemPrice)
    }
  }
})
export const {setInCart, increaseTotal, decrementTotal} =
  shoppingCartSlice.actions
export default shoppingCartSlice.reducer
