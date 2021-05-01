import database from "../../../firebase/database";

const addJoinDateFirebase = (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const userRef = database.ref(`users/${uid}`)
    userRef.update({
        joinDate: action.payload
    })
    next(action)
}

export default addJoinDateFirebase