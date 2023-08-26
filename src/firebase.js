import firebase from "firebase/compat/app";


import  "firebase/compat/auth";
import  "firebase/compat/firestore";
import  "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBwDQEVHQV8EATUDPPZI17fpV-M8yLFb9M",
    authDomain: "linkedin-clone-949d8.firebaseapp.com",
    projectId: "linkedin-clone-949d8",
    storageBucket: "linkedin-clone-949d8.appspot.com",
    messagingSenderId: "468917604871",
    appId: "1:468917604871:web:a30ccabf4b4ede8eae10a2",
    measurementId: "G-KF0M91P1QW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
export const auth = firebase.auth();