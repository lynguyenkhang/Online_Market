import { createSlice } from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        uncheckedList: [],
        product: {},
    },
    reducers: {
        loadAllUncheckedProducts(state, action){
            state.uncheckedList = action.payload
        },
        loadProduct(state, action){
            state.product = action.payload
        },
        changeProductStatus(state, action){
            state.product.check = action.payload.newStatus
        },
        cleanUp(state, action){
            state.product = {}
        },

    }

})

export const { loadAllUncheckedProducts, loadProduct, cleanUp, changeProductStatus } = AdminSlice.actions;

export default AdminSlice.reducer;