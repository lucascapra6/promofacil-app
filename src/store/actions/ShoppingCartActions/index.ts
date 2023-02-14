import {setInCart} from '@store/reducers/ShoppingCartReducer'
import {Dispatch} from 'redux'
import {AppDispatch, RootState} from '@store/configureStore'
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

export const setItemsInShoppingCart = (items: ShoppingCardItems | undefined) => async (dispatch: Dispatch) => {
    dispatch(setInCart(items))
}
