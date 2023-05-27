import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAKTMbJz_CeQ7IgLTJ0q4UqGTsK3KVR70M",
    authDomain: "intruder-detection-2fafe.firebaseapp.com",
    projectId: "intruder-detection-2fafe",
    storageBucket: "intruder-detection-2fafe.appspot.com",
    messagingSenderId: "421888421799",
    appId: "1:421888421799:web:b1f18c3ba59c6f9dbf1082"
  };


  const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);