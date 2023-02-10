import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import store from "@store/configureStore";

Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect()

Reactotron.clear();
console.tron = Reactotron;
export default Reactotron;
