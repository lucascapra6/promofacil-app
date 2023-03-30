import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
export default function QuantityControl({result, increment, decrement}) {
    return (
        <View>
            <TouchableOpacity onPress={increment} testID="incrementButton"><Text>+</Text></TouchableOpacity>
            <Text>{result}</Text>
            <TouchableOpacity onPress={decrement}><Text>-</Text></TouchableOpacity>
        </View>
    )
}
