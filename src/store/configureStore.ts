import {configureStore} from '@reduxjs/toolkit'
import shoppingCardReducer from '@store/reducers/ShoppingCartReducer/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, shoppingCardReducer)
export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
