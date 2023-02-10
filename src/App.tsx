import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigator from '@routes/index'
import {Provider} from 'react-redux'
import store from '@store/configureStore'
import { QueryClientProvider} from 'react-query'
import queryClient from "@reactQuery/config";
import Reactotron from "reactotron-react-native";
if(__DEV__) {
    import('../reactotronConfig').then(() => console.log('Reactotron Configured'))
}
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
