import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseApp = {
    apiKey: REACT_APP_apiKey,
    authDomain: REACT_APP_authDomain,
    databaseURL: REACT_APP_databaseURL,
    projectId: REACT_APP_projectId ,
    storageBucket: REACT_APP_storageBucket,
    messagingSenderId: REACT_APP_messagingSenderId,
    appId: REACT_APP_appId,
    measurementId: REACT_APP_measurementId,
  };

  const firebase = initializeApp(firebaseApp);

  export const db = getDatabase(firebase);
  export const firestore = getFirestore(firebase)


