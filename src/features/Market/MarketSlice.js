import { createSlice } from '@reduxjs/toolkit'

const MarketSlice = createSlice({
    name: 'market',
    initialState: {
        list: [],
        search: '',
        postedProduct: {
            id: '',
            title: '',
            describe: '',
            category: {},
            images: [],
            errors: [],
            price: -1,
            address: {
                city: '',
                district: '',
                ward: '',
                street: '',
            },
        }
    },
    reducers: {
        postingImage(state, action){
            const {image, error}  = action.payload
            if(action.payload.image !== null) state.postedProduct.images.push(image)
            else state.postedProduct.errors.push(error)
        },
        emptyPostedProducts(state){
            state.postedProduct.title = ''
            state.postedProduct.describe = ''
            state.postedProduct.category = {}
            state.postedProduct.images = []
            state.postedProduct.price = 0
            state.postedProduct.address = { city: '', district: '', ward: '', street: '',}
        },
        finishPostedProducts(state){
            state.postedProduct.id = ''
            state.postedProduct.title = ''
            state.postedProduct.describe = ''
            state.postedProduct.category = {}
            state.postedProduct.images = []
            state.postedProduct.price = 0
            state.postedProduct.address = { city: '', district: '', ward: '', street: '',}
        },
        deleteImage(state, action){
            const index = action.payload
            state.postedProduct.images.splice(index,1)
        },
        createNewPostedProduct(state, action){
            state.postedProduct.id = action.payload
        },
        resetErrors(state){
            state.postedProduct.errors = []
        },
        updateTitle(state, action){
            state.postedProduct.title = action.payload
        },
        updateDescribe(state, action){
            state.postedProduct.describe = action.payload
        },
        updateCategory(state, action){
            state.postedProduct.category = action.payload
        },
        updateAddress(state, action){
            state.postedProduct.address = action.payload
        },
        updatePrice(state, action){
            state.postedProduct.price = action.payload
        },
        loadProducts(state, action) {
            state.list = action.payload
        },
        searchingProduct(state, action){
            state.search = action.payload;
        }
    }   
})

export const { postingImage,
            emptyPostedProducts,
            deleteImage,
            createNewPostedProduct,
            resetErrors, 
            updateTitle, 
            updateDescribe,
            updateCategory, 
            updateAddress,
            updatePrice,
            finishPostedProducts,
            loadProducts,
            searchingProduct,
        } = MarketSlice.actions;

export default MarketSlice.reducer