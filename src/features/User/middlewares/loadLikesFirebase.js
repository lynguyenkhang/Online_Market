import database from '../../../firebase/database'

const loadLikesFirebase = async (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const ref = database.ref(`users/${uid}`)
    let currentList = await ref.get()
    currentList = currentList.val().likes
    currentList = currentList ? currentList : []
    
    action.payload = currentList
    next(action)
}

export default loadLikesFirebase