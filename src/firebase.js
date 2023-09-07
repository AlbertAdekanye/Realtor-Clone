// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKa8B7AMrK5c5_bxpjFtOxG9BTCisi84",
  authDomain: "realtor-clone-react-d8a64.firebaseapp.com",
  projectId: "realtor-clone-react-d8a64",
  storageBucket: "realtor-clone-react-d8a64.appspot.com",
  messagingSenderId: "1077888693049",
  appId: "1:1077888693049:web:84a20a7c9734728232eee8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();