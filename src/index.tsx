import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App'
import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={ new Firebase()} >
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'))

serviceWorker.unregister();
 

// const Firebase: any =require('Firebase')
 
// Firebase.initializeApp = {
//     apiKey: "AIzaSyA43DdWAqjjTk4S5Lps7tQtOlW8STbN-L4",
//     authDomain: "knowyou-e31a6.Firebaseapp.com",
//     databaseURL: "https://knowyou-e31a6.Firebaseio.com",
//     projectId: "knowyou-e31a6",
//     storageBucket: "knowyou-e31a6.appspot.com",
//     messagingSenderId: "846232402101",
//     appId: "1:846232402101:web:4816832bcc9ea79f"
// };
 
// var db= Firebase.firestore()

// db.collection("personal").get().then((QuerySnapshot: any) => {
//   QuerySnapshot.forEach((doc:any) => {
//       console.log(`${doc.id} => ${doc.data()}`)
//   })
// })

 
// ReactDOM.render(
//   <FirestoreProvider Firebase={Firebase}>
//     <App />
//   </FirestoreProvider>,
//   document.getElementById('root'),
// );