import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigator from '@routes/index'
import {Provider} from 'react-redux'
import store from '@store/configureStore'
import { QueryClientProvider} from 'react-query'
import queryClient from "@reactQuery/config";
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  )
}
export default App
