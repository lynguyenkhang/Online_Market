import database from '../../../firebase/database'


const filterPosts = (store, next, action) => {
    const uid = store.getState().auth.user.uid
    const productsList = store.getState().market.list
    const result = productsList.filter(product => product.uid === uid)
    action.payload = result
    next(action)
}


export default filterPosts