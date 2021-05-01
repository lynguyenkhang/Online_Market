import firebaseApp from './index'
import firebase from 'firebase'

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        const email = authResult.user.email
        const UEHcondition  = email.indexOf('ueh.edu.vn')
        if(UEHcondition > -1) return false
        else return true
      }
    },
};

const auth = firebaseApp.auth()
export default auth

// auth.signOut()