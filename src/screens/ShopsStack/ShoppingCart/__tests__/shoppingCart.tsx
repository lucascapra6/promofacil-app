import React from "react";
import {render} from "@utils/Test/test-utils";
import ShoppingCart, {useShoppingCartController} from "@screens/ShopsStack/ShoppingCart";
import {screen} from "@testing-library/react-native";
// @ts-ignore
import { shallow } from 'enzyme';
import {fireEvent} from "@testing-library/react-native";
import HomeScreen from "@screens/ShopsStack/HomeScreen";
import ShoppingCartCard from "@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard";
import ProductsCard from "@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/RenderProductsCard";
import QuantityControls from "@screens/ShopsStack/ShoppingCart/components/ShoppingCartCard/QuantityControls";
describe('ShoppingCart', () => {
    // @ts-ignore
    it('renders with the correct screen title', async () => {
        render(<ShoppingCart/>)
        const screenTitle = await screen.findByTestId('screen-title')
        expect(screenTitle?.props.children).toBe('Carrinho')
    })
    it('press the "Finalizar compra" button', async () => {
        const finishButtonAction = jest.spyOn(useShoppingCartController, 'callFinishButton')
        render(<ShoppingCart/>);
        const button = await screen.findByText('FINALIZAR COMPRA')
        fireEvent.press(button)
        expect(finishButtonAction).toBeCalledTimes(1)
    })
})
