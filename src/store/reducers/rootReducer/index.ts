import ShoppingCartReducer from "@store/reducers/ShoppingCartReducer";
import ShopsReducer from "@store/reducers/ShopsReducer";
import SectionsReducer from "@store/reducers/SectionsReducer";
const rootReducer = {
    shoppingCart: ShoppingCartReducer,
    shopsReducer: ShopsReducer,
    sectionsReducer: SectionsReducer
}
export default rootReducer
