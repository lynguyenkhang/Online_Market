import { postingImage,
    deleteImage,
    createNewPostedProduct,
    emptyPostedProducts,
    finishPostedProducts,
    loadProducts
} from "../MarketSlice"

import createRandomProductID from './createRandomProductID'
import emptyFolderInStorage from './emptyFolderInStorage'
import uploadImagesToStorage from './UploadImagesToStorage'
import deleteImagesInStorage from './deleteImagesInStorage'
import saveProductsToDatabase from './saveProductsToDatabase'
import loadProductsInFirebase from './loadProductsInFirebase'

const MarketMiddlewares = store => next => action => {
    switch(action.type){
        case emptyPostedProducts.type: emptyFolderInStorage(store, next, action); break;
        case postingImage.type: uploadImagesToStorage(store, next, action); break;
        case deleteImage.type: deleteImagesInStorage(store, next, action); break;
        case createNewPostedProduct.type: createRandomProductID(store, next, action); break;
        case finishPostedProducts.type: saveProductsToDatabase(store, next, action); break;
        case loadProducts.type: loadProductsInFirebase(store, next, action); break;
        default: next(action)
    }
}

export default MarketMiddlewares






