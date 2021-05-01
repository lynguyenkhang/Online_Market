import database from "../../../firebase/database"



const changePhoneNumberFirebase = (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const ref = database.ref(`users/${uid}`)
    ref.update({
        phoneNumber: action.payload
    })

    // update posts which this users post
    const productsList = store.getState().market.list
    const chosenList = productsList.filter(product => product.uid === uid)
    chosenList.map(product => {
        const ref = database.ref(`products/${product.id}/author`)
        ref.update({
            phoneNumber: action.payload
        })
    })


    next(action)
}

export default changePhoneNumberFirebase