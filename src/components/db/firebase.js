import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBUAL9WCIzkwf3OL54xSgsVxZA-7Ue3Cw8',
  authDomain: 'react-firebase-todo-app-d37d1.firebaseapp.com',
  databaseURL: 'https://react-firebase-todo-app-d37d1.firebaseio.com',
  projectId: 'react-firebase-todo-app-d37d1',
  storageBucket: 'react-firebase-todo-app-d37d1.appspot.com',
  messagingSenderId: '680400903341',
  appId: '1:680400903341:web:d02dee6219c2b6473a7a24',
  measurementId: 'G-Z4G3SZZM2W',
});

const DB = firebaseApp.firestore();

export default DB;
