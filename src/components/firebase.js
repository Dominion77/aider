import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8m0ryi--bL_i9ncB01td3xpPpGMDo268",
  authDomain: "aider-f4246.firebaseapp.com",
  projectId: "aider-f4246",
  storageBucket: "aider-f4246.firebasestorage.app",
  messagingSenderId: "57417482852",
  appId: "1:57417482852:web:2541d8f1092b4d204c9571",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);