import firestore from "firebase/firestore";
import initializeApp from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7wBDw9VRrua4ynCW64dXOCGmW6Br2qZY",
  authDomain: "linkedin-clone-7b8e2.firebaseapp.com",
  projectId: "linkedin-clone-7b8e2",
  storageBucket: "linkedin-clone-7b8e2.appspot.com",
  messagingSenderId: "1009716377902",
  appId: "1:1009716377902:web:8634f6c34f7dcefb3162bf",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firestore();
const auth = firebase.auth();

export { db, auth };
