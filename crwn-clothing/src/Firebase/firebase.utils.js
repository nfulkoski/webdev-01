import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import FIREBASE_CONFIG from './firebase.config.js';

const app = initializeApp(FIREBASE_CONFIG);

const db = getFirestore(app)
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);


/*
Learning
- Firebase is a colleciton of web dev solutions

Authentication is one main e.g.
- tools for auth state persistence
- tools for Oauth without the highly arduous process

*/
