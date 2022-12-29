import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
      import {
        getDatabase,
        set,
        ref,
        child,
        push,
        update,
      } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCJKDKDaIzcT4Io37QYqInr8-nhVMNPGR8",
        authDomain: "appdb-67010.firebaseapp.com",
        databaseURL:
          "https://appdb-67010-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "appdb-67010",
        storageBucket: "appdb-67010.appspot.com",
        messagingSenderId: "950581354688",
        appId: "1:950581354688:web:88ef81a38654cb8e7acd25",
        measurementId: "G-RLLP1Y775T",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      database.ref('/').set('');
database.ref('/a').set({num:1});
database.ref('/b').set({num:2});
database.ref('/c').set({num:3});
database.ref('/a').push(4);
database.ref('/b').push(5);
database.ref('/c').push(6);
database.ref('/a').push(7);
database.ref('/b').push(8);