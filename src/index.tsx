import ReactDOM from 'react-dom'
import App from './components/app'
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
 

const firebase: any =require('firebase')
 
firebase.initializeApp = {
    apiKey: "AIzaSyA43DdWAqjjTk4S5Lps7tQtOlW8STbN-L4",
    authDomain: "knowyou-e31a6.firebaseapp.com",
    databaseURL: "https://knowyou-e31a6.firebaseio.com",
    projectId: "knowyou-e31a6",
    storageBucket: "knowyou-e31a6.appspot.com",
    messagingSenderId: "846232402101",
    appId: "1:846232402101:web:4816832bcc9ea79f"
};
 
var db= firebase.firestore()

db.collection("personal").get().then((QuerySnapshot: any) => {
  QuerySnapshot.forEach((doc:any) => {
      console.log(`${doc.id} => ${doc.data()}`)
  })
})

 
ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>,
  document.getElementById('root'),
);