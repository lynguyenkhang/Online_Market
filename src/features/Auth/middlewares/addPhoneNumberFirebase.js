import database from "../../../firebase/database";

const addPhoneNumberFirebase = (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const userRef = database.ref(`users/${uid}`)
    userRef.update({
        phoneNumber: action.payload,
    })
    next(action)
}

export default addPhoneNumberFirebase