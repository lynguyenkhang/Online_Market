import database from "../../../firebase/database"


const changeNameFirebase = (store, next, action) => {
    const uid = store.getState().auth.user.uid

    // update userName
    const ref = database.ref(`users/${uid}`)
    ref.update({
        displayName: action.payload
    })

    // update posts which this users post
    const productsList = store.getState().market.list
    const chosenList = productsList.filter(product => product.uid === uid)
    chosenList.map(product => {
        const ref = database.ref(`products/${product.id}/author`)
        ref.update({
            name: action.payload
        })
    })

    next(action)
}

export default changeNameFirebase