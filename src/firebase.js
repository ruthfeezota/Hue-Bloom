import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB80-Eu3kdsfrqYOBMnq-aIKlWIj_WoxuE",
  authDomain: "hue-and-bloom.firebaseapp.com",
  projectId: "hue-and-bloom",
  storageBucket: "hue-and-bloom.firebasestorage.app",
  messagingSenderId: "1064709134790",
  appId: "1:1064709134790:web:9e0c59513ba3e8be923ac7",
  measurementId: "G-1XK3C0PH3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore with the 'app' object
const auth = getAuth(app); // Initialize Auth with the 'app' object

export { db, auth, analytics };