import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: []
}

export const productSlices = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action)
            state.productList = [...action.payload]
        }
    }
})

export const { setDataProduct } = productSlices.actions

export default productSlices.reducer