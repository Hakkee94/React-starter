import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    list: []
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem(state, action) {
            state.list = [...state.list, action.payload]
        },
        removeItem(state, action) {
            state.list = state.list.filter(f => f.name !== action.payload)
        }
    }
})

export const {addItem, removeItem} = listSlice.actions
export default listSlice.reducer