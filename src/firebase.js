import firebase from 'firebase/compat/app'; // 'compat/app' for Firebase v9 or later
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBDymg9L0a2BkJIwYw_xiKHGOrKBjSfqw0",
  authDomain: "task-mangement-system-3becc.firebaseapp.com",
  projectId: "task-mangement-system-3becc",
  storageBucket: "task-mangement-system-3becc.appspot.com",
  messagingSenderId: "401079741142",
  appId: "1:401079741142:web:0c53ce80cdaf5bfc4e7777",
  measurementId: "G-KFQ79LN8XK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };