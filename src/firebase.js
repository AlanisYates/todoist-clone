import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCtJqge4l43I0zjry3HoFMBWMN40lLf4KY",
    authDomain: "todist-tut-24939.firebaseapp.com",
    databaseURL: "https://todist-tut-24939.firebaseio.com",
    projectId: "todist-tut-24939",
    storageBucket: "todist-tut-24939.appspot.com",
    messagingSenderId: "861916047575",
    appId: "1:861916047575:web:19aca99210794175f0e892"
});

export { firebaseConfig as firebase };