
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthentication: false,
  access_token: null,
  user: null,
  allUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
        loginRedux: (state, action) => {
            state.isAuthentication = true,
            state.user = action.payload
        },
        
        logOutRedux: (state, action) => {
            state.user = null,
            state.isAuthentication = false
        },

        allUser: (state, action) => {
            state.allUser = action.payload
        }

    }
})

export const { loginRedux, logOutRedux, allUser } = authSlice.actions
export default  authSlice.reducer