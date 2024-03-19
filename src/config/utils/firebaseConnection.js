import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGCVKQloB7SJG5yl1D9y7gMlh8tuukCXc",
  authDomain: "restauranteb-72a55.firebaseapp.com",
  projectId: "restauranteb-72a55",
  storageBucket: "restauranteb-72a55.appspot.com",
  messagingSenderId: "798709482717",
  appId: "1:798709482717:web:8bf05c165485cf45b28734"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db, storage};