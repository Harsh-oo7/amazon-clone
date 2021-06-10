import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiE4v9sKg2CIU2s_Xoes7-WrJfHO-NKgk",
    authDomain: "clone-83f9c.firebaseapp.com",
    projectId: "clone-83f9c",
    storageBucket: "clone-83f9c.appspot.com",
    messagingSenderId: "800643912268",
    appId: "1:800643912268:web:450114fbd4abc59bfa5ae9",
    measurementId: "G-Q6CMT0CM4B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};