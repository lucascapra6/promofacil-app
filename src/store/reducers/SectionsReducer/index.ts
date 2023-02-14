import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    sections: []
}
const sectionsSlice = createSlice({
    name: 'sections',
    initialState: initialState,
    reducers: {
        setSections(state, action) {
            state.sections = action.payload
        }
    }
})
export const {setSections} =
    sectionsSlice.actions
export default sectionsSlice.reducer
