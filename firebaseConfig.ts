import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD5l2TLEwpZw_Mm7UZKeMLi-Ru26FtBeM0",
  authDomain: "workout-ec6f3.firebaseapp.com",
  databaseURL: "https://workout-ec6f3.firebaseio.com",
  projectId: "workout-ec6f3",
  storageBucket: "workout-ec6f3.appspot.com",
  messagingSenderId: "691298428964",
  appId: "1:691298428964:web:394de00f41e5f176a350b1",
};
// Initialize Firebase
export const fire = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// export const fire = firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// semakaleksandr2014@gmail.com
