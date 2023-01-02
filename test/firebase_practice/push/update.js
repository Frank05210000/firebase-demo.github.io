import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update } from "firebase/database";
//bulid firebase
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

//取得時間
function getTime(){
  const dt = new Date();
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
  let time=
  dt.getFullYear()+"/"+ 
  padL(dt.getMonth()+1)+"/"+
  padL(dt.getDate())+" "+
  padL(dt.getHours())+":"+
  padL(dt.getMinutes())+":"+
  padL(dt.getSeconds());
  return time;
}
//亂數生成器
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//單號生成 MMDD+6位數隨機號碼
function getOrderNum(){
  const dt = new Date();
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
  let orderNum="";
  orderNum=padL(dt.getMonth()+1)+
  padL(dt.getDate())+getRandomInt(1000000)
  console.log(orderNum);
  return orderNum;
}
//測試程式
writeNewPost("A01","2","漢堡套餐,柳橙汁");
function writeNewPost(tableNums, amount, meal) {
  const db = getDatabase();
  //計算時間
  let newTime = getTime();
  let orderNum= getOrderNum();
  // A post entry.
  const postData = {
    table_number: tableNums,
    order_number:orderNum,
    date:newTime,
    amount: amount,
    meal: meal
    
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'users')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/orders/' + newPostKey] = postData;
  return update(ref(db), updates);
}

