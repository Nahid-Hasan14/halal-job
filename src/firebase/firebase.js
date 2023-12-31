import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoq0qL1pn9TMW6rLo7BAwiS5DKAImt9mk",
  authDomain: "halal-job-fe130.firebaseapp.com",
  projectId: "halal-job-fe130",
  storageBucket: "halal-job-fe130.appspot.com",
  messagingSenderId: "398557360287",
  appId: "1:398557360287:web:cb50edafc4e3034cfbb2aa",
  measurementId: "G-8FC93V2VWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
