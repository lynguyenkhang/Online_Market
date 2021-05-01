import { createSlice } from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: {},
        author: {},
    },
    reducers: {
        loadProduct(state, action){
            state.product = action.payload
        },
        loadAuthor(state, action){
            state.author = action.payload
        },
        loadUncheckedProduct(state, action){
            state.product = action.payload
        },
        cleanUp(state, action){
            state.product = []
        }
    }
})

export const { loadProduct, loadAuthor, loadUncheckedProduct, cleanUp } = ProductSlice.actions
export default ProductSlice.reducer