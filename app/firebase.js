// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEnnSPGyLS8NuHvhI_TuqefHY1g9xZozM",
  authDomain: "netflix-nextjs-clone-24b44.firebaseapp.com",
  projectId: "netflix-nextjs-clone-24b44",
  storageBucket: "netflix-nextjs-clone-24b44.appspot.com",
  messagingSenderId: "787035282939",
  appId: "1:787035282939:web:f4ec0b5c29218afe86ff5e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);