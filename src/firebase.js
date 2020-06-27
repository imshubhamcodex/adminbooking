import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBv8smcSq6KUFImtYKIAWWZ0PgE3FDqS3s",
    authDomain: "dev-roomlelo.firebaseapp.com",
    databaseURL: "https://dev-roomlelo.firebaseio.com",
    projectId: "dev-roomlelo",
    storageBucket: "dev-roomlelo.appspot.com",
    messagingSenderId: "450187201766",
    appId: "1:450187201766:web:808edcd60afea26be93f27"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db