import { loadAuthor, loadProduct, loadUncheckedProduct } from '../ProductSlice'
import loadAuthorFirebase from './loadAuthorFirebase';
import loadProductFirebase from './loadProductFirebase'
import loadUncheckedProductFirebase from './loadUncheckedProductFirebase'



const ProductMiddleware = store => next => action => {
    switch(action.type){
        case loadProduct.type: loadProductFirebase(store, next, action); break;
        case loadAuthor.type: loadAuthorFirebase(store, next, action); break;
        case loadUncheckedProduct.type: loadUncheckedProductFirebase(store, next, action); break;
        default: next(action)
    }
}

export default ProductMiddleware