import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        likes: [],
        posts: [],
        uncheckedPosts: [],
    },
    reducers: {
        loadLikes(state, action){
            state.likes = action.payload
        },
        loadPosts(state, action){
            state.posts = action.payload
        },
        addLike(state, action){
            state.likes = [...state.likes, action.payload]
        },
        deleteLike(state, action){
            state.likes = action.payload
        },
        loadUncheckedPosts(state, action){
            state.uncheckedPosts = action.payload
        }
    }
})

export const { loadLikes, loadPosts, addLike, deleteLike, loadUncheckedPosts } = UserSlice.actions;
export default UserSlice.reducer