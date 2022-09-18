import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkhM6tUUtlbPasQjgS7TSdXIFT8Nj3u2o",
  authDomain: "nbyula-jobsearch.firebaseapp.com",
  projectId: "nbyula-jobsearch",
  storageBucket: "nbyula-jobsearch.appspot.com",
  messagingSenderId: "469816907815",
  appId: "1:469816907815:web:030bd2779c9d2bdbb25602"
};

  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();
  const auth=firebase.auth();

  export {firebase, firestore, app, auth}
