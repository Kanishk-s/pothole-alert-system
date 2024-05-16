// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDtRREuaVLP54ZLAPQrPdX3bO6qz2eIM",
  authDomain: "pothole-alert-system.firebaseapp.com",
  projectId: "pothole-alert-system",
  storageBucket: "pothole-alert-system.appspot.com",
  messagingSenderId: "745060235980",
  appId: "1:745060235980:web:12f78bbb17d7beefece069"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);