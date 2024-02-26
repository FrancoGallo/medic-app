// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd2cWAuSB7Nzgw31DC7cuMQe6qe9g5IAE",
  authDomain: "reactfirebaseapp-57bf8.firebaseapp.com",
  projectId: "reactfirebaseapp-57bf8",
  storageBucket: "reactfirebaseapp-57bf8.appspot.com",
  messagingSenderId: "1093638374683",
  appId: "1:1093638374683:web:1994b127e96f145ff23fbe",
  measurementId: "G-VSH2G9X12V"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;