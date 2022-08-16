import * as FirebaseApp from 'firebase/app';
import * as FirebaseAuth from 'firebase/auth';

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const FIREBASE_APP = FirebaseApp.initializeApp(FIREBASE_CONFIG);

export function signIn(email, password) {
  return FirebaseAuth.signInWithEmailAndPassword(
    FirebaseAuth.getAuth(),
    email,
    password
  );
}

export function signUp(email, password) {
  return FirebaseAuth.createUserWithEmailAndPassword(
    FirebaseAuth.getAuth(),
    email,
    password
  );
}

export function resetPassword(email) {
  return FirebaseAuth.sendPasswordResetEmail(FirebaseAuth.getAuth(), email);
}

export function signOut() {
  return FirebaseAuth.signOut(FirebaseAuth.getAuth());
}
