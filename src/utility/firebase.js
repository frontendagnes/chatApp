import firebase from "firebase/app";
import 'firebase/database'; 
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  databaseURL: "https://chatapp-2de74-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGINE_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const api = firebase.database();

export default api;
