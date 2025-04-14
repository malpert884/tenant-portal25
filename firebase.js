import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF036yA08Mrl0GRSj9tVLv3AEbgGzRSGk",
  authDomain: "tenant-portal-e478b.firebaseapp.com",
  projectId: "tenant-portal-e478b",
  storageBucket: "tenant-portal-e478b.appspot.com",
  messagingSenderId: "785623031320",
  appId: "1:785623031320:web:28f971f4a5eea649802d6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);