import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyD_ApLpvDncIUMdkZPxfzG4iXtD9ZvkK9M",
    authDomain: "list-68d28.firebaseapp.com",
    projectId: "list-68d28",
    storageBucket: "list-68d28.appspot.com",
    messagingSenderId: "816716066215",
    appId: "1:816716066215:web:5e36c85abd65a1fc5a1a82",
    measurementId: "G-106GQ62QPN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export { db };