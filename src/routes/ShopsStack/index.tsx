import React, {useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '@screens/ShopsStack/HomeScreen'
import Products from '@screens/ShopsStack/Products'
import Sections from '@screens/ShopsStack/Sections'
import Colors from 'themes/Colors/colors'
import ShoppingCart from '@screens/ShopsStack/ShoppingCart'
import {useFetchShopsQuery} from "@reactQuery/hookQuerys/shops/useFetchShopsQuery";
const ShopsStack = () => {
  type RootStackParamList = {
    MarketsHome: undefined
    Products: undefined
    Sections: undefined
    ShoppingCart: undefined
  }
  const Stack = createStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="SplashScreen" />*/}
      <Stack.Screen
        name="MarketsHome"
        component={() => <HomeScreen useCachedData={true}/>}
        options={{headerTitle: 'Mercados', headerShown: false}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.background}
        }}
      />
      <Stack.Screen
        name="Sections"
        component={Sections}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.background}
        }}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.background}
        }}
      />
    </Stack.Navigator>
  )
}
export default ShopsStack
