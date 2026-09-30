import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYULkknQa5fLT2KyRBBihwqnymRAhMssY",
  authDomain: "pknkelompok5-6bb1c.firebaseapp.com",
  projectId: "pknkelompok5-6bb1c",
  storageBucket: "pknkelompok5-6bb1c.firebasestorage.app",
  messagingSenderId: "683805451734",
  appId: "1:683805451734:web:2d68654df34c06b136f077",
  measurementId: "G-TNS8WGC0QB"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)