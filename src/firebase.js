
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvoWlm42aYOTTtnyaVrN2HKAgWUMBGLRE",
  authDomain: "chat-ec1dd.firebaseapp.com",
  projectId: "chat-ec1dd",
  storageBucket: "chat-ec1dd.appspot.com",
  messagingSenderId: "942665907454",
  appId: "1:942665907454:web:c68e556c50d0f9a4e779af",
  measurementId: "G-ZBQS0526YE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()