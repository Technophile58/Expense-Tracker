// import * as firebase from 'firebase';
// require('dotenv').config()

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// }

// firebase.initializeApp(firebaseConfig);

// export const database = firebase.database();


import firebase from "firebase/app";
import "firebase/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyD0n6mYIF47ktr_bSMcfKPk3chJ6nJzZxQ",
  authDomain: "expensetrackerapp-8d4b6.firebaseapp.com",
  databaseURL: "https://expensetrackerapp-8d4b6-default-rtdb.firebaseio.com",
  projectId: "expensetrackerapp-8d4b6",
  storageBucket: "expensetrackerapp-8d4b6.appspot.com",
  messagingSenderId: "871830510766",
  appId: "1:871830510766:web:749625cb655932761f213f"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export { firebaseConfig, database };
