import React from "react";
import IShops from "@interfaces/ApiResponses/ListShops";
import ShopCard from "@screens/ShopsStack/HomeScreen/components/ShopCard";
import {FlatList} from "react-native";

type ListShops = {
    shopsData: IShops[]
}
const ListShops = ({shopsData}: ListShops) => {
    return (
        <FlatList
            data={shopsData || []}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ShopCard imageUri={item.image.path} name={item.name}/>}
        />
    )
}
export default ListShops
