import { initializeApp } from "firebase/app";
import { getDatabase,ref,set } from "firebase/database";

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
const database = getDatabase(app);
writeUserData("userId","name","email","imageUrl");


function writeUserData(userId,name,email,imageUrl){
    const db =getDatabase();
    const reference =ref(db,'users/'+userId);

    set(reference,{
        username:name,
        email:email,
        profile_picture:imageUrl

    });
}
  