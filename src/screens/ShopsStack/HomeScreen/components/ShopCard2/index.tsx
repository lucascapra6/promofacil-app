import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native'
import React from 'react'
import Colors from 'themes/Colors/colors'
import Spacing from 'themes/Spacing/spacing'
import Sizes from 'themes/Fonts/sizes'
import {useNavigation} from '@react-navigation/native'
import Button from '@components/Button'
import {StackNavigationProp} from '@react-navigation/stack'
import RootStackParamList from '@screens/ShopsStack/rootStackParams'
import MemoizedImage from '@components/MemoizedImage'

export default React.memo(function ShopCard({imageUri}: any) {
  type MarketsScreenRouteProp = StackNavigationProp<
    RootStackParamList,
    'MarketsHome'
  >
  const navigation = useNavigation<MarketsScreenRouteProp>()
  return (
    <View style={styles.card}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <MemoizedImage style={styles.image} source={imageUri} />
          <View>
            <Text style={{fontSize: Sizes.large, color: Colors.black}}>
              Mercado Carrefour
            </Text>
            <Text style={{fontSize: Sizes.medium, color: Colors.black}}>
              Promoções:
              <Text style={{fontWeight: 'bold'}}> 0 produtos</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            secondary
            onPress={() => navigation.navigate('Products')}
            label="promoções"
          />
          <Button
            onPress={() => navigation.navigate('Sections')}
            label="seções"
          />
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: Spacing.normal,
    marginBottom: Spacing.normal,
    borderRadius: 5
  },
  image: {width: 100, height: 100, marginRight: Spacing.normal},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
