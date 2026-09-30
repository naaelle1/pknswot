import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAYULkknQa5fLT2KyRBBihwqnymRAhMssY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pknkelompok5-6bb1c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pknkelompok5-6bb1c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pknkelompok5-6bb1c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "683805451734",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:683805451734:web:2d68654df34c06b136f077",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-TNS8WGC0QB",
}

// Prevent re-initialization if app already exists
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

export const db = getFirestore(app)