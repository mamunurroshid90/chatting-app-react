import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMrfCr-FyFzvnbig3N6YGBR2aCiw24dUQ",
  authDomain: "chatting-app-react-9bdd7.firebaseapp.com",
  projectId: "chatting-app-react-9bdd7",
  storageBucket: "chatting-app-react-9bdd7.firebasestorage.app",
  messagingSenderId: "503777973291",
  appId: "1:503777973291:web:7501d06dd03ea09ab0c66e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
