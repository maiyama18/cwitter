import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'cwitter-6af40.firebaseapp.com',
  databaseURL: 'https://cwitter-6af40.firebaseio.com',
  projectId: 'cwitter-6af40',
  storageBucket: 'cwitter-6af40.appspot.com',
  messagingSenderId: '51484433207',
};
firebase.initializeApp(config);

const firestore = firebase.firestore();

const oAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, firestore, oAuthProvider };
