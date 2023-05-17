// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGnYVhcotPFuGjpvfQzES2LPl6gmUT-OM",
  authDomain: "twitter-clone-5bee6.firebaseapp.com",
  projectId: "twitter-clone-5bee6",
  storageBucket: "twitter-clone-5bee6.appspot.com",
  messagingSenderId: "714939836773",
  appId: "1:714939836773:web:ada8b726cd843c1948998c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
