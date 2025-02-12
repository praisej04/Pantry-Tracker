//Firebase configuration
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBZOvpz0DHQ2cqJQmo8ip_P-c1IGSZfZ4E",
  authDomain: "pantry-tracker-57a74.firebaseapp.com",
  projectId: "pantry-tracker-57a74",
  storageBucket: "pantry-tracker-57a74.appspot.com",
  messagingSenderId: "604240316313",
  appId: "1:604240316313:web:f945a37637342fa9df7508",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth};

