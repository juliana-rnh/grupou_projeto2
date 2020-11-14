import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDgn0yMlKMDdZt0a6f-hM4v5YckL7ErTEE",
    authDomain: "grupou-9697b.firebaseapp.com",
    databaseURL: "https://grupou-9697b.firebaseio.com",
    projectId: "grupou-9697b",
    storageBucket: "grupou-9697b.appspot.com",
    messagingSenderId: "883693559579",
    appId: "1:883693559579:web:9c99f138165982d7a1bdbe"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

  }