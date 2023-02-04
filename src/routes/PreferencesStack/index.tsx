import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '@screens/PreferencesStack/HomeScreen'
const PreferencesStack = () => {
  type RootStackParamList = {
    PreferencesHome: undefined
  }

  const Stack = createStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="PreferencesHome"
        component={HomeScreen}
        options={{headerTitle: 'Preferências'}}
      />
    </Stack.Navigator>
  )
}
export default PreferencesStack
