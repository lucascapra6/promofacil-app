import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "@store/reducers/rootReducer";
import reactotron from "../../reactotronConfig";
import ShoppingCartReducer from "@store/reducers/ShoppingCartReducer";
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const reactotronEnhancer =  reactotron.createEnhancer != null ? reactotron.createEnhancer() : null;

const reducers = combineReducers(rootReducer)
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: persistedReducer,
  // enhancers: reactotronEnhancer !== null ? [reactotronEnhancer] : undefined,
  middleware: [thunk]
})
const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default () => {
  return {store, persistor}
}
