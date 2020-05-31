import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDytfnTqZ1ivulMMVaLR7G6PZtYI2eCbhI",
    authDomain: "shopping-app-14ac4.firebaseapp.com",
    databaseURL: "https://shopping-app-14ac4.firebaseio.com",
    projectId: "shopping-app-14ac4",
    storageBucket: "shopping-app-14ac4.appspot.com",
    messagingSenderId: "795169909205",
    appId: "1:795169909205:web:0137b158bd0068ce5cf55c",
    measurementId: "G-XCYE0F8G9G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
