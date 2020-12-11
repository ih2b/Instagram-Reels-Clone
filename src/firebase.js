import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpI4WIrPnkpZOyOY3G9BnmHIZLrq0rFU8",
    authDomain: "reel-25301.firebaseapp.com",
    projectId: "reel-25301",
    storageBucket: "reel-25301.appspot.com",
    messagingSenderId: "1088995197489",
    appId: "1:1088995197489:web:34e2d45a4f00c1eb518b10",
    measurementId: "G-4RF6381LXY"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
export default db;