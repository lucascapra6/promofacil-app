import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from "@react-native-async-storage/async-storage";
    const tron = Reactotron
        .setAsyncStorageHandler(AsyncStorage)
        .configure()
        .useReactNative()
        .use(reactotronRedux())
        .connect()

    tron.clear();
    console.tron = Reactotron;

export default tron
