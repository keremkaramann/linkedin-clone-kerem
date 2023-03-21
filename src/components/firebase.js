import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7n1KpKOnaIRzWn4cxgNq_3jcD91TZTrc",
  authDomain: "linkedin-clone-kerem.firebaseapp.com",
  projectId: "linkedin-clone-kerem",
  storageBucket: "linkedin-clone-kerem.appspot.com",
  messagingSenderId: "890104093923",
  appId: "1:890104093923:web:25b9dd5ed0127ce8b1f9d6",
  measurementId: "G-9JEGHTHNE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const auth = getAuth(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
