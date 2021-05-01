import database from "../../../firebase/database"
import { storageRef, clearOldAvatars } from "../../../firebase/storage"


const uploadAvatar = async (store, next, action) => {
    const metadata = {contentType: 'image'}
    const uid = store.getState().auth.user.uid
    const productsList = store.getState().market.list
    const file = action.payload

    const avatarFileRef = storageRef.child(`avatars/${uid}`)
    await clearOldAvatars(avatarFileRef)
    
    // post to storage and get uploaded image link
    const imageRef = avatarFileRef.child(file.name)
    await imageRef.put(file, metadata)
    const imageLink = await imageRef.getDownloadURL()

    // upload to firebase database
    const userRef = database.ref(`users/${uid}`)
    userRef.update({
        photoURL: imageLink
    })
    
    // update avatar in products list database
    productsList.map(product => {
        if(product.uid === uid) {
            const ref = database.ref(`products/${product.id}/author`)
            ref.update({
                avatar: imageLink
            })
        }
    })

    action.payload = imageLink
    next(action)
}

export default uploadAvatar