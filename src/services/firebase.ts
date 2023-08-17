// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBokwbjQKu7B8kNmd_jsQ2J6KE61Jivibs",
  authDomain: "csv-to-db-22c27.firebaseapp.com",
  projectId: "csv-to-db-22c27",
  storageBucket: "csv-to-db-22c27.appspot.com",
  messagingSenderId: "304275845605",
  appId: "1:304275845605:web:8e10cc538439685c953f0c",
  measurementId: "G-1Q7Z98WL7X"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const database = getDatabase();