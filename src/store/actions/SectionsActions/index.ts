import {Dispatch} from "redux";
import {ISections} from "@interfaces/ApiResponses/ListSections";
import {setSections} from "@store/reducers/SectionsReducer";

export const setSectionsAction = (sections: ISections[]) => async (dispatch: Dispatch) => {
    dispatch(setSections(sections))
}
