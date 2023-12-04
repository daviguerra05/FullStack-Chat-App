// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTm8rgWa4xzC1q9VQVoflOn8_FLDLjcJg",
  authDomain: "chat-app-386b3.firebaseapp.com",
  projectId: "chat-app-386b3",
  storageBucket: "chat-app-386b3.appspot.com",
  messagingSenderId: "643368834964",
  appId: "1:643368834964:web:935165f4442bf140452181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);