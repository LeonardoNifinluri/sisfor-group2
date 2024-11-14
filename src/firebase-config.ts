import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDwcs03UIvVNmMFUmy1IG0FpxlpzQ0VoZU",
  authDomain: "sisfor-group2.firebaseapp.com",
  projectId: "sisfor-group2",
  storageBucket: "sisfor-group2.firebasestorage.app",
  messagingSenderId: "1098983960227",
  appId: "1:1098983960227:web:17aa95350492dc00b35916",
  measurementId: "G-GDXK89NF74"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, analytics }