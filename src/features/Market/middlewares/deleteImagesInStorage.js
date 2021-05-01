import { storageRef } from '../../../firebase/storage'


const deleteImagesInStorage = async (store, next, action) => {
    const index  = action.payload;
    const { ref } = store.getState().market.postedProduct.images[index]
    const fileRef = storageRef.child(ref);
    await fileRef.delete()
    next(action)
}

export default deleteImagesInStorage;