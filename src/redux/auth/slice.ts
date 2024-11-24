// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-h1slwLFbafqg56auIpLZcx-YkaXsQY",
  authDomain: "nanny-c1b9d.firebaseapp.com",
  projectId: "nanny-c1b9d",
  storageBucket: "nanny-c1b9d.firebasestorage.app",
  messagingSenderId: "90675857845",
  appId: "1:90675857845:web:655f2cea9fcd526fbab1fc",
  measurementId: "G-W7S6D8YH5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
