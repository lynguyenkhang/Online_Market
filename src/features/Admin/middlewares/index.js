import { loadAllUncheckedProducts, loadProduct, changeProductStatus } from "../AdminSlice"
import changeProductStatusFirebase from "./changeProductStatusFirebase";
import loadAllUncheckedProductsFirebase from "./loadAllUncheckedProductsFirebase"
import loadProductFirebase from "./loadProductFirebase";

const AdminMiddlewares = store => next => action => {
    switch (action.type) {
        case loadAllUncheckedProducts.type: loadAllUncheckedProductsFirebase(store, next, action); break;
        case loadProduct.type: loadProductFirebase(store, next, action); break;
        case changeProductStatus.type: changeProductStatusFirebase(store, next, action); break;
        default: next(action);
    }
}

export default AdminMiddlewares;