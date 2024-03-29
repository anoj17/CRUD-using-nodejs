import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fname: "",
    lname: "",
    email: "",
    _id: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action)
            // state = action.payload.data
            state._id = action.payload.data._id
            state.fname = action.payload.data.fname
            state.lname = action.payload.data.lname
            state.email = action.payload.data.email
            // state.alert = action.payload.data.alert
            
        }
        // logOutRedux: (state, action) => {
        //     console.log(action)
        //     // state = action.payload.data
        //     state._id = "",
        //     state.fname = "",
        //     state.lname = "",
        //     state.email = ""
            
        // }
    }
})

export const { loginRedux } = userSlice.actions

export default userSlice.reducer