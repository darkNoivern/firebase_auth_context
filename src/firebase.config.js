// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz99g2rhYRcsXWZJuygBR2dmMr2AR0NkU",
  authDomain: "fir-auth-6aa72.firebaseapp.com",
  projectId: "fir-auth-6aa72",
  storageBucket: "fir-auth-6aa72.appspot.com",
  messagingSenderId: "1049032178824",
  appId: "1:1049032178824:web:4c14b205a66f2420a3f33d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };