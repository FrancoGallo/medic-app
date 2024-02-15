// File that connects to firebase (do not touch).

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAd2cWAuSB7Nzgw31DC7cuMQe6qe9g5IAE",
    authDomain: "reactfirebaseapp-57bf8.firebaseapp.com",
    projectId: "reactfirebaseapp-57bf8",
    storageBucket: "reactfirebaseapp-57bf8.appspot.com",
    messagingSenderId: "1093638374683",
    appId: "1:1093638374683:web:1994b127e96f145ff23fbe",
    measurementId: "G-VSH2G9X12V"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return (app)
}