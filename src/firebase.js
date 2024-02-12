// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-EKWU2lz8G7qQ92veETZoZcqckrwZ_O0",
  authDomain: "chatwave-27244.firebaseapp.com",
  projectId: "chatwave-27244",
  storageBucket: "chatwave-27244.appspot.com",
  messagingSenderId: "1064478997742",
  appId: "1:1064478997742:web:2013ff9d5f8941f443c7ff",
  measurementId: "G-LD4XZ3H0SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth()
 export const storage = getStorage();
 export const db=getFirestore()