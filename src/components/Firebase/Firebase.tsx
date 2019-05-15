import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { string } from 'prop-types';

const config = {
   apiKey: "AIzaSyA43DdWAqjjTk4S5Lps7tQtOlW8STbN-L4",
   authDomain: "knowyou-e31a6.firebaseapp.com",
   databaseURL: "https://knowyou-e31a6.firebaseio.com",
   projectId: "knowyou-e31a6",
   storageBucket: "knowyou-e31a6.appspot.com",
   messagingSenderId: "846232402101",
   appId: "1:846232402101:web:4816832bcc9ea79f"
}
interface Firebase {
    auth?: any;
    db: any;

}

class Firebase  {
    constructor(){
        app.initializeApp(config)

        this.auth = app.auth()
        this.db = app.database()
    }
    doCreateUserWithEmailAndPassword = (email:string, password:string) => 
        this.auth.doCreateUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = (email:string) => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = async (password:string) => {
        if (this.auth.currentUser) {
            await this.auth.currentUser.updatePassword(password)
        }
        throw Error('No auth.currentUser!')
    }
    
    user = uid => this.db.ref(`user/${uid}`)
    users = () => this.db.ref('users')
}

export default Firebase