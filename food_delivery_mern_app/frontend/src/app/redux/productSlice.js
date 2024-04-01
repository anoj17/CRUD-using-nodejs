import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    cartSlice: []
}

export const productSlices = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
            const total = action.payload.price
            state.cartSlice = [...state.cartSlice, { ...action.payload, qty: 1, total: total }]
        },
        deleteCartItem: (state, action) => {
            console.log(action.payload)
            const id = action.payload
            const filterItem = state.cartSlice.filter((item) => item.id === id)
            return {
                ...state,
                cartSlice: filterItem
            }
        },
        increaseQnt: (state, action) => {

        },
        decreaseQnt: (state, action) => {

        }
    }
})

export const { setDataProduct, addCartItem, deleteCartItem, increaseQnt, decreaseQnt } = productSlices.actions

export default productSlices.reducer