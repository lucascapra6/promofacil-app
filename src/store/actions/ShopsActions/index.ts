import {Dispatch} from "redux";
import {setInCart} from "@store/reducers/ShoppingCartReducer";
import IShops from "@interfaces/ApiResponses/ListShops";
import {setShops} from "@store/reducers/ShopsReducer";

export const setShopsAction = (shops: IShops[]) => async (dispatch: Dispatch) => {
    dispatch(setShops(shops))
}
