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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdDate = new Date();

        try{
            await userRef.set({
                displayName
                ,email
                ,createdDate
                ,...additionalData
            })
        }
        catch(error){
            console.log('Error creating user ', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef  =  collectionRef.doc();
        batch.set(newDocRef,obj);
    });

    return await batch.commit();

}

export const convertCollectionsSnapshopToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc=>{
        const { title, items} = doc.data();
        return {
            routeName : encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {} );
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
