import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBFSt9pls77WRgROpMzHDlz54i9BOYdQDg",
    authDomain: "twitter-clone-5f4c5.firebaseapp.com",
    projectId: "twitter-clone-5f4c5",
    storageBucket: "twitter-clone-5f4c5.appspot.com",
    messagingSenderId: "737194012175",
    appId: "1:737194012175:web:ff33c30e35066325613d7a",
    measurementId: "G-H9L90K8V82"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;




