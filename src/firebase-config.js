import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApOLMWfKMjuOPDN8mvXJomDA8up10S_zE",
    authDomain: "mymovies-3e2f3.firebaseapp.com",
    databaseURL: "https://mymovies-3e2f3.firebaseio.com",
    projectId: "mymovies-3e2f3",
    storageBucket: "mymovies-3e2f3.appspot.com",
    messagingSenderId: "1067475085758"

  };

  const fb = firebase.initializeApp(config);
  const db = firebase.firestore();
  export {db, fb}