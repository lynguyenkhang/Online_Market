import auth from "../../../firebase/auth";
import database from "../../../firebase/database";

import { fetchAuthStateObserver, setError, clearUser } from "../AuthSlice";


const TriggerAuthObserver = (store, next, action, admin) => {

    auth.onAuthStateChanged(async user => {
        if (user) {
            const { displayName, email, uid, photoURL } = user

            const UEHcondition = email.indexOf('ueh.edu.vn')
            const condition2 = email === admin

            if (UEHcondition > -1 || condition2) {
                const userRef = database.ref(`users/${uid}`)
                const snapshot = await userRef.get()
                action.type = fetchAuthStateObserver.type

                if (snapshot.exists()) {
                    action.payload = { uid: uid, ...snapshot.val() }
                } else {
                    const newUser = { uid, displayName, email, photoURL, phoneNumber: '', joinDate: '' }
                    userRef.set(newUser)
                    action.payload = newUser
                }
            } else {
                action.type = setError.type
                action.payload = `Gmail ${email} không thuộc UEH. Vui lòng đăng nhập Gmail khác`
            }
        } else {
            action.type = clearUser.type
        }
        next(action)
    })
}

export default TriggerAuthObserver