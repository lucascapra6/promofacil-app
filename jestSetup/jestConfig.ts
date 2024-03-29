import 'react-native-gesture-handler/jestSetup'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
jest.useFakeTimers();
export const mockedNavigation = jest.fn();
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
// jest.mock('react-native-skeleton-content-nonexpo', () => {
//     return 'string'
// });
jest.mock('@react-navigation/native', () => {
    return {
        useFocusEffect: jest.fn(),
        useNavigation: () => ({
            navigate: mockedNavigation,
        }),
    }
})

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock("@reactQuery/hookQuerys/shops/useFetchShopsQuery", () => {
    return {
        useFetchShopsQuery: jest.fn(() => {
            return {
                isLoading: false,
                isError: false
            }
        })
    }
})

