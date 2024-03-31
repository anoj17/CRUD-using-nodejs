
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   selectCategory: []
}

export const stateMangeSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setStateData : (state,action)=> {
            state.selectCategory = [...action.payload]
        }
    }
}) 

export const { setStateData } = stateMangeSlice.actions
export default stateMangeSlice.reducer