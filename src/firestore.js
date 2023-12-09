import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBcnHW23_OLX5ccd6_yoxQmUL26uGkin3E",
    authDomain: "gl-funnel-test.firebaseapp.com",
    projectId: "gl-funnel-test",
    storageBucket: "gl-funnel-test.appspot.com",
    messagingSenderId: "28348319944",
    appId: "1:28348319944:web:4c3eec1ec555677c69bdfd"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export { db ,auth};