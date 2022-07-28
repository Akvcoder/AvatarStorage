import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "firstone-5ac2a.firebaseapp.com",
    projectId: "firstone-5ac2a",
    storageBucket: "firstone-5ac2a.appspot.com",
    messagingSenderId: "10842926773",
    appId: "1:10842926773:web:31ef97c5365f62373398fc",
    measurementId: "G-T0DX9P5KGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;