import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCWiNfjlNfSdr4sTMoNmDqN8JyXETf5gWo",
    authDomain: "clothing-ab.firebaseapp.com",
    databaseURL: "https://clothing-ab.firebaseio.com",
    projectId: "clothing-ab",
    storageBucket: "clothing-ab.appspot.com",
    messagingSenderId: "863488330451",
    appId: "1:863488330451:web:cd9f1e2c4f1954357ce226",
    measurementId: "G-W83YXDDQGJ"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;