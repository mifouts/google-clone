// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMwdtCshiM8uoa8oSZ9ewJsCOjPK5nj5Y",
  authDomain: "clone-ac03e.firebaseapp.com",
  databaseURL: "https://clone-ac03e-default-rtdb.firebaseio.com",
  projectId: "clone-ac03e",
  storageBucket: "clone-ac03e.appspot.com",
  messagingSenderId: "957335705327",
  appId: "1:957335705327:web:5eb5528d42a178862a2d1a",
  measurementId: "G-4JBY699LBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
