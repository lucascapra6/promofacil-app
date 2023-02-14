import React from "react";
import {Text} from "react-native";
const useApiDataOfflineHandler = <T>(data: T | undefined | null, cacheData: T, isError: boolean) => {
    if(Array.isArray(cacheData)) { //typeguard
        if(isError && cacheData.length > 0) return cacheData
    }
    if(isError) return false
    return data
};
export default useApiDataOfflineHandler
