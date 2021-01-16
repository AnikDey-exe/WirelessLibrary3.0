import * as firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyA7-WCklXKmgkSNRXMdrDIvRjU4rgPXezo",
  authDomain: "library-master-4d58b.firebaseapp.com",
  databaseURL: "https://library-master-4d58b-default-rtdb.firebaseio.com",
  projectId: "library-master-4d58b",
  storageBucket: "library-master-4d58b.appspot.com",
  messagingSenderId: "553611507333",
  appId: "1:553611507333:web:ee1d59c1c14f236b90dbec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();