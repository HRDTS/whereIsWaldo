import React from "react";
import Parent from "./parent";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "redacted",
  authDomain: "redacted.firebaseapp.com",
  projectId: "redacted",
  storageBucket: "redacted.appspot.com",
  messagingSenderId: "redacted",
  appId: "redacted",
  measurementId: "redacted"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}

export default App;
