import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBlFxqfG7tqYl5ardB2gY0F4u9mlLNa13A",
  authDomain: "socialapp-417c0.firebaseapp.com",
  databaseURL: "https://socialapp-417c0.firebaseio.com",
  projectId: "socialapp-417c0",
  storageBucket: "socialapp-417c0.appspot.com",
  messagingSenderId: "746854182244",
  appId: "1:746854182244:web:275c1fb22de590fad91e71",
  measurementId: "G-TLDB201C92"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);