import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBZb8DCKK-9yVfx6ecPTWeSOnXiidVrrnM",
  authDomain: "clone-cc57d.firebaseapp.com",
  projectId: "clone-cc57d",
  storageBucket: "clone-cc57d.firebasestorage.app",
  messagingSenderId: "218610550342",
  appId: "1:218610550342:web:0b2031da330f9b92266c47"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);