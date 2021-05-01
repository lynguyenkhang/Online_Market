import database from "../../../firebase/database";

const saveProductsToDatabase = async (store, next, action) => {
    const {id, title, describe, category, images, price, address} =  store.getState().market.postedProduct
    const {uid, email, displayName, photoURL, phoneNumber} = store.getState().auth.user
    const time = new Date()
    // const newPostRef = database.ref(`/products/${id}`)
    const newPostRef = database.ref(`products/${id}`)
    newPostRef.set({
        uid: uid,
        author: {
            name: displayName,
            avatar: photoURL,
            phoneNumber: phoneNumber
        },
        time: time.getTime(),
        title: title,
        describe: describe,
        category: category.category,
        images: [...images.map(img => img.link)],
        price: price,
        address: {...address},
        view: 0,
        check: false,
    })
    next(action)
}

export default saveProductsToDatabase;