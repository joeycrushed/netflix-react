import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAI8VP3VOXauSfSD5pifBgVbhrpv6nqhbM",
  authDomain: "netflix-clone-7ca63.firebaseapp.com",
  projectId: "netflix-clone-7ca63",
  storageBucket: "netflix-clone-7ca63.appspot.com",
  messagingSenderId: "102938276312",
  appId: "1:102938276312:web:fa9750e4e6f3328e3642ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;