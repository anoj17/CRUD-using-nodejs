
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthentication: false,
  access_token: null,
  user: null,
  allUser: null,
  addReq: []
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
        },

        // addFriendRequest: (state, action)=> {
        //     state.addReq = [...state.addReq, {...action.payload}]
        //     console.log(state.addReq)
        // },

        // deleteFriendRequest: (state, action) => {
        //     const id = action.payload
        //     // console.log(id)
        //     state.addReq = state.addReq.filter((item)=> item._id !== id)
        //     console.log(state.addReq)
        // }
    }
})

export const { loginRedux, logOutRedux, allUser, addFriendRequest, deleteFriendRequest } = authSlice.actions
export default  authSlice.reducer