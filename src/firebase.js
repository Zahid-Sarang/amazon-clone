import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRrYq0hbgA3mLRQWTTY9RnVC1XsqSrB1I",
    authDomain: "clone-d5abf.firebaseapp.com",
    projectId: "clone-d5abf",
    storageBucket: "clone-d5abf.appspot.com",
    messagingSenderId: "873276162924",
    appId: "1:873276162924:web:927dcd3981c32308736949"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,db}