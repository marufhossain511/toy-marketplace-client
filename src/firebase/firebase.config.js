// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfBTIQUBOS7lJTtiaF9sT8dBVjxFWMyM",
  authDomain: "toy-market-place.firebaseapp.com",
  projectId: "toy-market-place",
  storageBucket: "toy-market-place.appspot.com",
  messagingSenderId: "39924383020",
  appId: "1:39924383020:web:c2de00400957395bae0089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app