import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjLRfif0TwbfMCelWY-IxHDJ86GAQF2Mk",
  authDomain: "clone-claw.firebaseapp.com",
  projectId: "clone-claw",
  storageBucket: "clone-claw.appspot.com",
  messagingSenderId: "1034017505417",
  appId: "1:1034017505417:web:29b977b8cb1081eeddc658",
};

const App = firebase.initializeApp(firebaseConfig);
const db = App.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
