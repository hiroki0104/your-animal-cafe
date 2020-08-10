import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'your-animal-cafe.firebaseapp.com',
  databaseURL: 'https://your-animal-cafe.firebaseio.com',
  projectId: 'your-animal-cafe',
  storageBucket: 'your-animal-cafe.appspot.com',
  messagingSenderId: '216093985571',
  appId: '1:216093985571:web:c7207f3040f6d8fe85da96',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
