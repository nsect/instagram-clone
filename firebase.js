// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZlILhF1sI5FBooGaZ6ECZP0xTAEnY7MM',
  authDomain: 'nsect-insta-clone.firebaseapp.com',
  projectId: 'nsect-insta-clone',
  storageBucket: 'nsect-insta-clone.appspot.com',
  messagingSenderId: '324326806567',
  appId: '1:324326806567:web:58b2e84745379f69ebaa02',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
