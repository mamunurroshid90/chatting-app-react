import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCo1ugsV8362H86mJPAoMALvFfX8htSSTE",
  authDomain: "chatting-app-react-ffcb3.firebaseapp.com",
  projectId: "chatting-app-react-ffcb3",
  storageBucket: "chatting-app-react-ffcb3.appspot.com",
  messagingSenderId: "19990871401",
  appId: "1:19990871401:web:75b77c883dbd24aa8011f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
