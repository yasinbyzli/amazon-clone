import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzw2XwFsQR6XrcFCZlYUh_eJ_dVla-ebA",
    authDomain: "clone-mar28.firebaseapp.com",
    projectId: "clone-mar28",
    storageBucket: "clone-mar28.appspot.com",
    messagingSenderId: "53966633847",
    appId: "1:53966633847:web:7f0d538e8e39d83f51ff72",
    measurementId: "G-W6CC2CL37P"
  });

const db = firebase.firestore();

export { db };