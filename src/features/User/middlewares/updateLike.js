import database from '../../../firebase/database'


export const addLikeFirebase = async (store, next, action)  => {
    const uid = store.getState().auth.user.uid
    const likes = store.getState().user.likes
    const ref = database.ref(`users/${uid}`)
    ref.update({
        likes: [...likes, action.payload]
    })

    next(action)
}

export const deleteLikeFirebase = (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const likes = store.getState().user.likes
    const newLikes = likes.filter(like => like !== action.payload)
    const ref = database.ref(`users/${uid}`)
    ref.update({
        likes: [...newLikes]
    })
    action.payload = [...newLikes]

    next(action)
}