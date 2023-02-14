import {useSelector} from "react-redux";
import {RootState} from "@store/configureStore";
import IShops from "@interfaces/ApiResponses/ListShops";
import {ISections} from "@interfaces/ApiResponses/ListSections";

const useStoreData= () => {
    const shops = useSelector<RootState, IShops[]>(state => state.shopsReducer.shops)
    const sections = useSelector<RootState, ISections[]>(state => state.sectionsReducer.sections)
    return {shops, sections}
}
export default useStoreData
