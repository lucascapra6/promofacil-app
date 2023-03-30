import React from "react";
import HomeScreen from "@screens/ShopsStack/HomeScreen";
import {fireEvent, screen} from "@testing-library/react-native";
import {render} from "@utils/Test/test-utils";
import MarketsApi from "@api/Markets";
import {mockShops} from "@screens/ShopsStack/HomeScreen/__tests__/mock";
import MarketingCard from "@screens/ShopsStack/HomeScreen/components/MarketingCard";
import {mockedNavigation} from "../../../../../jestSetup/jestConfig";
import ListShops from "@screens/ShopsStack/HomeScreen/components/ListShops";

describe('screens/shops/HomeScreen', () => {
    const marketsApi = new MarketsApi()
    beforeAll(() => {
        jest.spyOn(marketsApi, 'listShops').mockResolvedValue(mockShops)
    })
    it('renders correctly', () => {
        render(<HomeScreen/>)
    })
    it('renders with the correct screen title', () => {
        render(<HomeScreen useCachedData={false}/>)
        const screenTitle = screen.queryByTestId('screen-title')
        expect(screenTitle?.props.children).toBe('Mercados')
    })
    it('api list shops return an array of shops with correct signature', async () => {
        const markets = await marketsApi.listShops()
        expect(markets).toMatchSnapshot()
    })
    it('A market name was rendered on screen', async () => {
        render(<ListShops shopsData={mockShops}/>)
        expect(screen.getByText(mockShops[0].name)).toBeTruthy()
    })
    it('click on the "VER MAIS" button and navigate to Products screen', () => {
        render(
            <MarketingCard/>
        )
        const button = screen.queryByTestId('my-button')
        if (button) {
            fireEvent.press(button)
        }
        expect(mockedNavigation).toBeCalledWith('Products')
    })
})
