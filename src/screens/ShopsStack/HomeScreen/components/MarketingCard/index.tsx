import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import Spacing from 'themes/Spacing/spacing'
import Colors from 'themes/Colors/colors'
import Sizes from 'themes/Fonts/sizes'
import Button from '@components/Button'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import RootStackParamList from '@screens/ShopsStack/rootStackParams'
import TextInputStyled from '@components/StyledTextInput/style'
import MarketingCardContainer from '@screens/ShopsStack/HomeScreen/components/MarketingCard/styles/marketingCardContainer'
import MarketingCardDescription from '@screens/ShopsStack/HomeScreen/components/MarketingCard/styles/marketingCardDescription'
export default function MarketingCard() {
  type MarketsScreenRouteProp = StackNavigationProp<
    RootStackParamList
  >
  const navigation = useNavigation<MarketsScreenRouteProp>()
  const [input, setInput] = useState<null | string | number>(null)
  return (
    <MarketingCardContainer>
      <MarketingCardDescription>
        Mercado do Tomate está torrando o estoque com promoções de até 40%
      </MarketingCardDescription>
      <Button
        onPress={() => navigation.navigate('Products')}
        buttonStyle={styles.sectionButton}
        label="ver mais"
      />
    </MarketingCardContainer>
  )
}

const styles = StyleSheet.create({
  sectionButton: {
    marginTop: Spacing.normal,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: Colors.white
  }
})
