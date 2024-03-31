import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"
import authSlice from "./authSlice"
import productSlice from './productSlice'
import stateSlice from './stateManage'


export const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        product: productSlice,
        state: stateSlice,
    }
})