import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    shops: []
}
const shopsSlice = createSlice({
    name: 'shops',
    initialState: initialState,
    reducers: {
        setShops(state, action) {
            state.shops = action.payload
        }
    }
})
export const {setShops} =
    shopsSlice.actions
export default shopsSlice.reducer
