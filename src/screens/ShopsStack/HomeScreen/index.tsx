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
import ListShops from "@screens/ShopsStack/HomeScreen/components/ListShops";
type defaultProps = {
   useCachedData?: boolean
}
const HomeScreen = ({useCachedData}: defaultProps) => {
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
    const hasShopsData = Boolean(shopsData)
    if(isLoading) return <ShopsSkeletonLoading isLoading={isLoading}/>
    if(useCachedData) {
        if(!hasShopsData) return <Text>Error - não ha dados salvos previamente</Text>
    } else {
        if(isError) return <Text>Error - falha na requisicao</Text>
    }
  return (
    <Screen padding="normal">
        <Label testID="screen-title" size="large" color="black" fontWeight="bold">
            Mercados
        </Label>
        <MarketingCard />
        <ListShops shopsData={shopsData || []}/>
    </Screen>
  )
}

export default HomeScreen
