import React, {useCallback, useEffect, useState} from 'react'
import {useFocusEffect} from "@react-navigation/native";
import Label from '@components/Label'
import Screen from '@components/Screen'
import {FlatList, TextInput, View} from 'react-native'
import ShopCard from '@screens/ShopsStack/HomeScreen/components/ShopCard'
import MarketingCard from './components/MarketingCard'
import {usePrefetchSectionsQuery} from "@reactQuery/hookQuerys/sections/useFetchSectionsQuery";
import {useFetchShopsQuery} from "@reactQuery/hookQuerys/shops/useFetchShopsQuery";
import MarketsApi from "@api/Markets";
import Animated from "react-native-reanimated";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import ShopsSkeletonLoading from "@screens/ShopsStack/HomeScreen/components/ShopsSkeletonLoading";
const HomeScreen = () => {
    const {data, isLoading, isError, refetch, isFetching} = useFetchShopsQuery()

    useFocusEffect(useCallback(() => {
        refetch()
    },[]))

    useEffect(() => {
        usePrefetchSectionsQuery()
    },[])
  return (
    <Screen padding="normal">
        <Label size="large" color="black" fontWeight="bold">
            Mercados
        </Label>
        <MarketingCard />
        {isLoading ?
            <ShopsSkeletonLoading isLoading={isLoading}/>
            :
            <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ShopCard imageUri={item.image.path} name={item.name}/>}
        />
        }
    </Screen>
  )
}

export default HomeScreen
