import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    productList: [],
    cartSlice: []
}

export const productSlices = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action.payload)
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {

            const check = state.cartSlice.some((item) => item._id === action.payload.id)

            if (check) {
                toast("Item is already exist in cart")
            } else {
                toast("Item added successfully!")
                const total = action.payload.price
                state.cartSlice = [...state.cartSlice, { ...action.payload, qty: 1, total: total }]
            }
        },
        deleteCartItem: (state, action) => {
            const id = action.payload
            state.cartSlice = state.cartSlice.filter((item) => item._id !== id)
            toast("Delete one item")
            // console.log(state.cartSlice.total)
        },
        increaseQnt: (state, action) => {
            const id = action.payload
            const index = state.cartSlice.findIndex((item) => (item._id === id))
            if (index > -1) {

                state.cartSlice[index].qty = ++state.cartSlice[index].qty
                state.cartSlice[index].total = state.cartSlice[index].price * state.cartSlice[index].qty
            } else {
                toast("items cannot be -1")
            }


        },
        decreaseQnt: (state, action) => {
            const id = action.payload
            const index = state.cartSlice.findIndex((item) => (item._id === id))
            if (index > -1) {
                state.cartSlice[index].qty = --state.cartSlice[index].qty
                state.cartSlice[index].total = state.cartSlice[index].price * state.cartSlice[index].qty
            } else {
                toast("items cannot be -1")
            }
        },
    }
})

export const { setDataProduct, addCartItem, deleteCartItem, increaseQnt, decreaseQnt } = productSlices.actions

export default productSlices.reducer