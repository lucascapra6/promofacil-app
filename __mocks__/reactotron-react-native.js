const reactotron = {
    configure: () => reactotron,
    useReactNative: () => reactotron,
    use: () => reactotron,
    connect: () => reactotron,
    clear: () => reactotron,
    createEnhancer: () => reactotron,
    setAsyncStorageHandler:() => reactotron
};

jest.mock("reactotron-react-native", () => reactotron);

module.exports = reactotron;
