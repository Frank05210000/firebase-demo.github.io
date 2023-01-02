import { initializeApp } from "firebase/app";
import { getDatabase, ref,get, set,child,onValue, push, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJKDKDaIzcT4Io37QYqInr8-nhVMNPGR8",
  authDomain: "appdb-67010.firebaseapp.com",
  databaseURL: "https://appdb-67010-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "appdb-67010",
  storageBucket: "appdb-67010.appspot.com",
  messagingSenderId: "950581354688",
  appId: "1:950581354688:web:88ef81a38654cb8e7acd25",
  measurementId: "G-RLLP1Y775T"
};
const app = initializeApp(firebaseConfig);

var userId="userId";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
