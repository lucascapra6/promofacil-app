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
import {useNavigation} from '@react-navigation/native'
import Button from '@components/Button'
import {StackNavigationProp} from '@react-navigation/stack'
import RootStackParamList from '@screens/ShopsStack/rootStackParams'
import AppImage from '@components/AppImage'
import Label from '@components/Label'
import RowContainer from '@components/StyledContainers/RowContainer/RowContainer'
import CentralizedRowContainer from '@components/StyledContainers/CentralizedRowContainer/CentralizedRowContainer'
import ShopCardContainer from '@screens/ShopsStack/HomeScreen/components/ShopCard/components/CardContainer'
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import {useFetchShopsQuery} from "@reactQuery/hookQuerys/shops/useFetchShopsQuery";
import ShopsSkeletonLoading from "@screens/ShopsStack/HomeScreen/components/ShopsSkeletonLoading";
type ShopCard = {
  imageUri: string,
  name: string
}
export default function ShopCard({imageUri, name}: ShopCard) {
  type MarketsScreenRouteProp = StackNavigationProp<
    RootStackParamList,
    'MarketsHome'
  >
  const navigation = useNavigation<MarketsScreenRouteProp>()
  return (
    <ShopCardContainer>
      <RowContainer>
        <AppImage
          width={100}
          height={100}
          style={{marginRight: Spacing.normal}}
          source={{uri: imageUri}}
        />
        <View>
          <Label size={'large'} color={'black'}>
            {name}
          </Label>
          <Label size={'medium'} color={'black'}>
            Promoções:
            <Label fontWeight={'bold'} size={'medium'}>
              0 produtos
            </Label>
          </Label>
        </View>
      </RowContainer>
      <CentralizedRowContainer>
        <Button
          secondary
          onPress={() => navigation.navigate('Products')}
          label="promoções"
        />
        <Button
          onPress={() => navigation.navigate('Sections')}
          label="seções"
        />
      </CentralizedRowContainer>
    </ShopCardContainer>
  )
}
