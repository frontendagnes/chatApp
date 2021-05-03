import firebase from "firebase/app";
import 'firebase/database'; 
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAUAhtuolEX8eOYtBeBeZQ2i5cj28sCT-s",
  authDomain: "chatapp-2de74.firebaseapp.com",
  databaseURL: "https://chatapp-2de74-default-rtdb.firebaseio.com",
  projectId: "chatapp-2de74",
  storageBucket: "chatapp-2de74.appspot.com",
  messagingSenderId: "451794529148",
  appId: "1:451794529148:web:1fc95397728e9cd5bb92f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const api = firebase.database();

export default api;
