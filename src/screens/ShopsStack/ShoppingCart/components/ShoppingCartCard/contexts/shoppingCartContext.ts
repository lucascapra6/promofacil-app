import {createContext} from 'react'

const ShoppingCartContext = createContext({
  index: '0',
  marketImage: 1,
  marketName: 'string',
  total: 1
})
export default ShoppingCartContext
