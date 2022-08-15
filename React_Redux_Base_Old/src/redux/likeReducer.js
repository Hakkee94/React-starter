import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    values: 0
}

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        increment(state, action) {
            state.values += action.payload
        },

        decrement(state, action) {
            state.values -= action.payload
        }
    }
})

export const {increment, decrement} = likeSlice.actions
export default likeSlice.reducer