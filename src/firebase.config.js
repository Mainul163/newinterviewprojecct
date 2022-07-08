import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsxZ_Ng_c0pypMQrZlavWR8QEd9qyc7Kg",
  authDomain: "newinterviewproject.firebaseapp.com",
  databaseURL: "https://newinterviewproject-default-rtdb.firebaseio.com",
  projectId: "newinterviewproject",
  storageBucket: "newinterviewproject.appspot.com",
  messagingSenderId: "1073686177415",
  appId: "1:1073686177415:web:ba2caa2e2b37118e7bba22",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
