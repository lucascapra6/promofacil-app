import {useQuery} from "react-query";
import MarketsApi from "@api/Markets";
import {queryKeys} from "@reactQuery/queryKeys";
import queryClient from "@reactQuery/config";
const marketsApi = new MarketsApi()
export function useFetchSectionsQuery() {
    const {data, isLoading, isError, isFetching} = useQuery(queryKeys.sections, async () => {
        return await marketsApi.listSections()
    })
    return {data, isLoading, isError, isFetching}
}

export function usePrefetchSectionsQuery() {
    queryClient.prefetchQuery(queryKeys.sections, async () => await marketsApi.listSections())
}
