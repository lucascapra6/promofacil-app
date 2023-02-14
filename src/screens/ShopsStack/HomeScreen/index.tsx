import React, {useCallback, useEffect, useState} from 'react'
import {useFocusEffect} from "@react-navigation/native";
import Label from '@components/Label'
import Screen from '@components/Screen'
import {FlatList, Text, TextInput, View} from 'react-native'
import ShopCard from '@screens/ShopsStack/HomeScreen/components/ShopCard'
import MarketingCard from './components/MarketingCard'
import {usePrefetchSectionsQuery} from "@reactQuery/hookQuerys/sections/useFetchSectionsQuery";
import {useFetchShopsQuery} from "@reactQuery/hookQuerys/shops/useFetchShopsQuery";
import ShopsSkeletonLoading from "@screens/ShopsStack/HomeScreen/components/ShopsSkeletonLoading";
import {useDispatch} from "react-redux";
import {setShopsAction} from "@store/actions/ShopsActions";
import useStoreData from "hooks/useStoreData";
import useApiDataOfflineHandler from "hooks/useApiDataOfflineHandler";
import IShops from "@interfaces/ApiResponses/ListShops";
import {ISections} from "@interfaces/ApiResponses/ListSections";
const HomeScreen = () => {
    const {data, isLoading, isError, refetch, isFetching} = useFetchShopsQuery()
    const {shops} = useStoreData()
    const shopsData = useApiDataOfflineHandler<IShops[]>(data, shops, isError)
    const dispatch = useDispatch<any>()
    useFocusEffect(useCallback(() => {
        refetch()
    },[]))

    useEffect(() => {
        usePrefetchSectionsQuery()
    },[])

    useEffect(() => {
        if(data) {
            dispatch(setShopsAction(data))
        }
    },[data])
    if(isLoading) return <ShopsSkeletonLoading isLoading={isLoading}/>
    if(!shopsData) return <Text>Error</Text>
  return (
    <Screen padding="normal">
        <Label size="large" color="black" fontWeight="bold">
            Mercados
        </Label>
        <MarketingCard />
        <FlatList
            data={shopsData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ShopCard imageUri={item.image.path} name={item.name}/>}
        />
    </Screen>
  )
}

export default HomeScreen
