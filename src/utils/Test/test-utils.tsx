import {QueryClient, QueryClientProvider} from "react-query";
import reduxStore from "@store/configureStore";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import React, {ReactElement, ReactNode} from "react";
import {render, RenderOptions} from "@testing-library/react-native";
const queryClient = new QueryClient();
const {store, persistor} = reduxStore()

type Options = Parameters<typeof render>[1];

type AllTheProviders = {
    children: ReactNode
}
const AllTheProviders = ({ children }: AllTheProviders) => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);

const customRender = (ui: ReactElement, options?: Options) =>
    render(ui,{wrapper: AllTheProviders, ...options})

export * from '@testing-library/react-native'
export {customRender as render}
