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
var a1="";
const db = getDatabase();
const dbref = ref(db, 'users/');
onValue(dbref, (snapshot) => {
  const data = snapshot.val();
//   updateStarCount(postElement, data);
console.log(data);
//1
snapshot.forEach(function (item) {
    console.log(item.key + " " + item.val());
    a1=item.key;
    console.log(a1);
})

const a2 = ref(db, 'users/'+a1);
onValue(a2, (snapshot) => {
  const data2 = snapshot.val();
console.log(data2);
snapshot.forEach(function (item2) {
    console.log(item2.key + " " + item2.val());
});
});


//2
// db.ref("chinese/Bob").orderByValue().once('value', function (snapshot) {
//     snapshot.forEach(function (item) {
//         console.log(item.key + " " + item.val());
//     })
// });
//3
// db.ref("chinese").orderByChild("grade").once('value', function (snapshot) {
//     snapshot.forEach(function (item) {
//         console.log(item.key + " " + item.val().grade);
//     })
// });
});
