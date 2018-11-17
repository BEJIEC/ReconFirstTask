import * as firebase from 'firebase';
import 'firebase/firestore';
import {localStore} from './App.js'


firebase.initializeApp({
    apiKey: "AIzaSyAtRzAx-NHymA2yLuu5287nbNb-FfF4UOE",
    authDomain: "reconapp-c629a.firebaseapp.com",
    databaseURL: "https://reconapp-c629a.firebaseio.com",
    projectId: "reconapp-c629a",
    storageBucket: "reconapp-c629a.appspot.com",
    messagingSenderId: "298910673843"
});

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots : true,
});

export const collection = db.collection("ReconDB");

export default class FirestoreWorker {
    static addUser(user){
        collection.add(user)
            .then((userRef) =>{
                localStore.addUser({
                    login : user.login,
                    email : user.email,
                    userRef : userRef.id,
                })
            }
            );
    };

    static editUser(userRef, user){
        collection.doc(userRef).update(user).then(() =>{
            localStore.editUser({
                login : user.login,
                email : user.email,
                userRef : userRef,
            });
        });


    }

    static deleteUser(userRef){
        collection.doc(userRef).delete().then(() =>{
            localStore.deleteUser(userRef);
        });
    }
}



