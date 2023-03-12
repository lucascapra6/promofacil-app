import React from "react";
import HomeScreen from "@screens/ShopsStack/HomeScreen";
import {render} from "@testing-library/react-native";
import App from "../../../../App";
import {QueryClient, QueryClientProvider} from "react-query";
import { Provider } from 'react-redux'
import configureStore from "@store/configureStore";
import reduxStore from "@store/configureStore";
import {NavigationContainer} from "@react-navigation/native";
import {PersistGate} from "redux-persist/integration/react";
describe('screens/shops/HomeScreen', () => {
    const queryClient = new QueryClient();
    const {store, persistor} = reduxStore()
    // @ts-ignore
    const wrapper = ({ children }) => (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );

    it('renders correctly', () => {
        render(<HomeScreen/>, {wrapper})
    })
    it('renders with the correct screen title', () => {
        const {queryByTestId, debug} = render(<HomeScreen/>, {wrapper})
        const screenTitle = queryByTestId('screen-title')
        expect(screenTitle?.props.children).toBe('Mercados')
    })
})
