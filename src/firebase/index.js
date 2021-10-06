import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApoR-eOXM8OXrQtMS-EHs0oLxyf7bcj_0",
  authDomain: "fintech-53fe8.firebaseapp.com",
  databaseURL: "https://fintech-53fe8-default-rtdb.firebaseio.com",
  projectId: "fintech-53fe8",
  storageBucket: "fintech-53fe8.appspot.com",
  messagingSenderId: "811300166187",
  appId: "1:811300166187:web:8fffe0644393f33b22286e",
  measurementId: "G-MV90ZLYEDY",
};

let app = firebase.initializeApp(firebaseConfig);
export const database = app.database();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();

export const DB_NODES = {
  RECENT_TRANSACTIONS: "recent-transactions",
  SAVED_TRANSACTIONS: "saved-transactions",
  WALLETS: "users-wallet",
  USERS: "users",
  BANKS: "banks",
};
