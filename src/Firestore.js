import firebase from 'firebase/app'

firebase.initializeApp({
    apiKey: "AIzaSyAtRzAx-NHymA2yLuu5287nbNb-FfF4UOE",
    authDomain: "reconapp-c629a.firebaseapp.com",
    databaseURL: "https://reconapp-c629a.firebaseio.com",
    projectId: "reconapp-c629a",
    storageBucket: "reconapp-c629a.appspot.com",
    messagingSenderId: "298910673843"
});

var db = firebase.firestore();

db.settings({
    timestampsInSnapshots : true,
});

class Firestore{

}

