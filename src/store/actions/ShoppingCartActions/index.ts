import {setInCart} from '@store/reducers/ShoppingCartReducer'
import {Dispatch} from 'redux'

type Products = {
  id: string
  name: string
  unitPrice: number
  productImage: any
}
type ShoppingCardItems = {
  id: string
  marketImage: any
  marketName: string
  total: number
  products: Array<Products>
}[]

const sleep = () => {
  return new Promise((resolve: any) => {
    setTimeout(resolve, 2000)
  })
}

export const setItemsInShoppingCart =
  (items: ShoppingCardItems) => async (dispatch: Dispatch) => {
    // await sleep()
    dispatch(setInCart(items))
  }
