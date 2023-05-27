import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvF_7z5ewC2WPOCtF0c-FWW_kXof5w3QQ",
  authDomain: "green-space-9a4a0.firebaseapp.com",
  projectId: "green-space-9a4a0",
  storageBucket: "green-space-9a4a0.appspot.com",
  messagingSenderId: "1090545275783",
  appId: "1:1090545275783:web:46a38ce4655b50135d3922"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
