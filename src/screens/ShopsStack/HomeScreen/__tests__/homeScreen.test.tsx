import React from "react";
import HomeScreen from "@screens/ShopsStack/HomeScreen";
import {render} from "@testing-library/react-native";
import App from "../../../../App";
describe('screens/shops/HomeScreen', () => {
    it('renders correctly', () => {
        render(<HomeScreen/>)
    })
})
