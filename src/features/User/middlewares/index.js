import {loadLikes, loadPosts, addLike, deleteLike, loadUncheckedPosts} from '../UserSlice'
import filterPosts from './filterPosts'
import loadLikesFirebase from './loadLikesFirebase'
import loadPersonalUnCheckedProducts from './loadPersonalUncheckedProduct'
import { addLikeFirebase, deleteLikeFirebase } from './updateLike'


const UserMiddleware = store => next => action => {
    switch(action.type){
        case loadPosts.type: filterPosts(store, next, action); break;
        case loadLikes.type: loadLikesFirebase(store, next, action); break;
        case addLike.type:  addLikeFirebase(store, next, action); break;
        case deleteLike.type: deleteLikeFirebase(store, next, action); break;
        case loadUncheckedPosts.type: loadPersonalUnCheckedProducts(store, next, action); break;
        default: next(action)
    }
}

export default UserMiddleware