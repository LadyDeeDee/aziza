import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDuKPJINsI9xCcYIo5ccK7p_5u9_oLN9BE",
  authDomain: "aziza-d442d.firebaseapp.com",
  projectId: "aziza-d442d",
  storageBucket: "aziza-d442d.appspot.com",
  messagingSenderId: "484714419376",
  appId: "1:484714419376:web:ec4ed1414f56168c9d5775",
  measurementId: "G-QJBR0DPP2F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)