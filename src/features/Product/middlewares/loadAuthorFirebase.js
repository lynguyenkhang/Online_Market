import database from  '../../../firebase/database'


const loadAuthorFirebase = async (store, next, action) => {
    const uid = action.payload
    const ref = database.ref(`users/${uid}`)
    action.payload = await ref.get()
    next(action)
}

export default loadAuthorFirebase