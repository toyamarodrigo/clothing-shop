import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnwfPe072zT85bcCND6xT1t2W8D_hV1DI",
  authDomain: "clothing-shop-c0573.firebaseapp.com",
  databaseURL: "https://clothing-shop-c0573.firebaseio.com",
  projectId: "clothing-shop-c0573",
  storageBucket: "clothing-shop-c0573.appspot.com",
  messagingSenderId: "22632862512",
  appId: "1:22632862512:web:3eafaf4aaa903d040baef5",
  measurementId: "G-CZX8J0VKP3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;