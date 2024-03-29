import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isAuthenticated: false,
   accessToken: null,
   user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action)
            state.user = action.payload
            state.isAuthenticated = true
        },
        logoutRedux: (state, action) => {
            state.user = null
            state.isAuthenticated = false
        },
     
    }
})

export const { loginRedux, logoutRedux} = authSlice.actions

export default authSlice.reducer