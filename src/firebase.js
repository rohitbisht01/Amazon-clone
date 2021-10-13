// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDrvT6W6IuZcG7_ue6HaaqeEPBW6HEwwzc",
    authDomain: "clone-ceacd.firebaseapp.com",
    projectId: "clone-ceacd",
    storageBucket: "clone-ceacd.appspot.com",
    messagingSenderId: "546352001884",
    appId: "1:546352001884:web:54a8ecf92da7cb4b9d0799",
    measurementId: "G-7W7Z93PNLV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };