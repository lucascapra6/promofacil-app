import {applyMiddleware, combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import shoppingCardReducer from '@store/reducers/ShoppingCartReducer/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "@store/reducers/rootReducer";
import reactotron from '../../reactotronConfig'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
// @ts-ignore
const createdEnhancer = reactotron.createEnhancer()
// @ts-ignore
let composed = applyMiddleware(thunk, createdEnhancer)

const persistedReducer = persistReducer(persistConfig, shoppingCardReducer)

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
