import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseApp = {
    apiKey: "redacted",
    authDomain: "redacted.firebaseapp.com",
    databaseURL: "https://redacted-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redacted",
    storageBucket: "redacted.appspot.com",
    messagingSenderId: "redacted",
    appId: "redacted",
    measurementId: "redacted",
  };

  const firebase = initializeApp(firebaseApp);

  export const db = getDatabase(firebase);
  export const firestore = getFirestore(firebase)


