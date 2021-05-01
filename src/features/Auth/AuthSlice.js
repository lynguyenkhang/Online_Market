import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            uid: '',
            displayName: '',
            email: '',
            photoURL: '',
            phoneNumber: '',
            joinDate: '',
        },
        error: ''
    },
    reducers: {
        fetchAuthStateObserver(state, action){
            state.user = action.payload
            state.error = ''
        },
        clearUser(state){
            state.user = {
                uid: '',
                displayName: '',
                email: '',
                photoURL: '',
                phoneNumber: '',
                joinDate: '',
            }
            state.error = ''
        },
        addPhoneNumber(state,action){
            state.user.phoneNumber = action.payload
        },
        addJoinDate(state, action){
            state.user.joinDate = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        changeAvatar(state, action){
            state.user.photoURL = action.payload
        },
        changeDisplayName(state, action){
            state.user.displayName = action.payload
        },
        changePhoneNumber(state, action) {
            state.user.phoneNumber = action.payload
        }
    }
})

export const { fetchAuthStateObserver,
    setError,
    clearUser,
    addPhoneNumber,
    changeAvatar,
    changeDisplayName,
    changePhoneNumber,
    addJoinDate,
} = AuthSlice.actions;
export default AuthSlice.reducer