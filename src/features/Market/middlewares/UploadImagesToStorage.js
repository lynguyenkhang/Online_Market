import { storageRef } from '../../../firebase/storage'


const uploadImagesToStorage = async (store, next, action) => {
    const metadata = { contentType: 'image' }
    const file = action.payload
    const { id, images } = store.getState().market.postedProduct

    const productsRef = storageRef.child(`products/${id}`)
    const fileRef = productsRef.child(file.name)

    await fileRef.put(file, metadata)
    const imageLink = await fileRef.getDownloadURL()
    const checkedArr = images.filter(image => image.ref === fileRef.fullPath)

    if (checkedArr.length > 0) {
        action.payload.image = null
        action.payload.error = file.name
    }
    else action.payload.image = { ref: fileRef.fullPath, link: imageLink }

    next(action)
}

export default uploadImagesToStorage;