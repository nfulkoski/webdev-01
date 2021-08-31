import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import FIREBASE_CONFIG from './firebase.config.js';

const app = initializeApp(FIREBASE_CONFIG);

const db = getFirestore(app)
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    console.log('hi')

    const { displayName, email, uid} = userAuth;
    const createdAt = new Date();

    const usersRef = collection(db, "users");

    try {

      await setDoc(

        doc(usersRef, uid),
        {

          displayName,
          email,
          createdAt,
          ...additionalData

        }

      );

    } catch (error) {

      console.log('error creating user', error.message);

    }
  }

  return userRef;
};


/*
Learning
- Firebase is a colleciton of web dev solutions

Authentication is one main e.g.
- tools for auth state persistence
- tools for Oauth without the highly arduous process


uid refers to the user id string generated on login


*/
