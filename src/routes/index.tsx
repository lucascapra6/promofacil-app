import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import ShopsStack from '@routes/ShopsStack'
import PreferencesStack from '@routes/PreferencesStack'
import Colors from 'themes/Colors/colors'
import Weights from 'themes/Fonts/weights'
import TouchableIcon from '@components/TouchableIcon'
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import Spacing from 'themes/Spacing/spacing'
import ViewableIcon from '@components/ViewableIcon'
import Sizes from 'themes/Fonts/sizes'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import RootStackParamList from '@screens/ShopsStack/rootStackParams'
import BottomBarIcon from '@routes/styles/bottomBarIcon'
import BottomBarLabel from '@routes/styles/bottomBarLabel'
import HeaderButtonsContainer from '@routes/styles/headerButtonsContainer'
export type RootTabParamList = {
  SplashScreen: undefined
  Markets: undefined
  Preferences: undefined
}
const Tab = createBottomTabNavigator<RootTabParamList>()
const RootNavigator = () => {
  type MarketsScreenRouteProp = StackNavigationProp<RootStackParamList>
  const navigation = useNavigation<MarketsScreenRouteProp>()
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTitleAlign: 'left',
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: Weights.normal,
          fontSize: Sizes.large
        },
        headerTitle: 'Promo fácil',
        headerRight: () => {
          return (
            <HeaderButtonsContainer>
              <TouchableIcon
                color={Colors.white}
                icon={'SearchIcon'}
                height={30}
                width={30}
              />
              <TouchableIcon
                onPress={() => navigation.navigate('ShoppingCart')}
                color={Colors.white}
                icon={'CartIcon'}
                height={30}
                width={30}
                testID="shoppingCart"
              />
            </HeaderButtonsContainer>
          )
        }
      }}>
      <Tab.Screen
        name="Markets"
        component={ShopsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomBarIcon
              color={Colors.white}
              icon={'ShopsIcon'}
              height={25}
              width={25}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => {
            return focused ? <BottomBarLabel>Mercados</BottomBarLabel> : <></>
          },
          tabBarStyle: styles.tabBarStyle
        }}
      />
      <Tab.Screen
        name="Preferences"
        component={PreferencesStack}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomBarIcon
              color={Colors.white}
              icon={'SettingsIcon'}
              height={25}
              width={25}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => {
            return focused ? (
              <BottomBarLabel>Preferências</BottomBarLabel>
            ) : (
              <></>
            )
          },
          tabBarStyle: styles.tabBarStyle
        }}
      />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
    width: 100,
    paddingHorizontal: Spacing.normal,
    justifyContent: 'space-between'
  },
  tabBarStyle: {backgroundColor: Colors.primary, height: 70}
})
export default RootNavigator
