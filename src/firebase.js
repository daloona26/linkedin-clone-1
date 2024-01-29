// Import the necessary functions from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7wBDw9VRrua4ynCW64dXOCGmW6Br2qZY",
  authDomain: "linkedin-clone-7b8e2.firebaseapp.com",
  projectId: "linkedin-clone-7b8e2",
  storageBucket: "linkedin-clone-7b8e2.appspot.com",
  messagingSenderId: "1009716377902",
  appId: "1:1009716377902:web:8634f6c34f7dcefb3162bf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyD7wBDw9VRrua4ynCW64dXOCGmW6Br2qZY",
//   authDomain: "linkedin-clone-7b8e2.firebaseapp.com",
//   projectId: "linkedin-clone-7b8e2",
//   storageBucket: "linkedin-clone-7b8e2.appspot.com",
//   messagingSenderId: "1009716377902",
//   appId: "1:1009716377902:web:8634f6c34f7dcefb3162bf",
// };

// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const db = firebase.firestore();
// // const auth = firebase.auth();

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// export { db, auth };
