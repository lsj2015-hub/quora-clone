// Import the functions you need from the SDKs you need
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvKkGF5ZR8QmL50MoxEKKKsQRQCifijew',
  authDomain: 'quora-clone-25774.firebaseapp.com',
  projectId: 'quora-clone-25774',
  storageBucket: 'quora-clone-25774.appspot.com',
  messagingSenderId: '489704562087',
  appId: '1:489704562087:web:796271b15da2f876fdea82',
  measurementId: 'G-XTT14RQN48',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
