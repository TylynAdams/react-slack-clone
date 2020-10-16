import firebase from 'firebase';
// import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDZFbWoHV1RA_j360yHhgRQLOT4QxvjSng",
    authDomain: "react-slack-clone-f5ddf.firebaseapp.com",
    databaseURL: "https://react-slack-clone-f5ddf.firebaseio.com",
    projectId: "react-slack-clone-f5ddf",
    storageBucket: "react-slack-clone-f5ddf.appspot.com",
    messagingSenderId: "939187888284",
    appId: "1:939187888284:web:e80abba1e72656f2a7cd59",
    measurementId: "G-XVH9VS1MJ4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase; 