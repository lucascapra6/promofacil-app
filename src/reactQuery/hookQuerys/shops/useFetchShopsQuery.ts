import {useQuery} from "react-query";
import MarketsApi from "@api/Markets";
import {queryKeys} from "@reactQuery/queryKeys";
import queryClient from "@reactQuery/config";
import React from "react";
import {useFocusEffect} from "@react-navigation/native";
const marketsApi = new MarketsApi()
export function useFetchShopsQuery() {
    const fiveMinutesInMs = 300000
    const {data, isLoading, isError, isFetching, refetch} = useQuery(queryKeys.shops, async () => {
        return await marketsApi.listShops()
    }, {
        refetchInterval: fiveMinutesInMs
    })
    return {data, isLoading, isError, isFetching, refetch}
}

export function usePrefetchShopsQuery() {
    queryClient.prefetchQuery(queryKeys.shops, async () => await marketsApi.listShops())
}
