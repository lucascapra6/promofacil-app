import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigator from '@routes/index'
import {Provider} from 'react-redux'
import reduxStore from "@store/configureStore";
import { QueryClientProvider} from 'react-query'
import queryClient from "@reactQuery/config";
import Reactotron from "reactotron-react-native";
import {PersistGate} from "redux-persist/integration/react";
import {Loading} from "@components/Loading";
if(__DEV__) {
    import('../reactotronConfig').then(() => console.log('Reactotron Configured'))
}
const App = () => {
    const {store, persistor} = reduxStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading/>}>
          <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                  <RootNavigator />
              </NavigationContainer>
          </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
