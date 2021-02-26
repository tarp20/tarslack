import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB9f8zDMNumKmTRsLjHP86Gi1ODHVpuuds",
  authDomain: "tarclone.firebaseapp.com",
  projectId: "tarclone",
  storageBucket: "tarclone.appspot.com",
  messagingSenderId: "488108339691",
  appId: "1:488108339691:web:cf787dc90d7e0ec54ee9ae"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
export default db;
