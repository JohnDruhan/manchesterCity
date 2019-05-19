import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


const config = {
  apiKey: "AIzaSyCZBgfaTadsS3kV3lF2nFOFS7CiNAMAXTM",
    authDomain: "mcity-6348e.firebaseapp.com",
    databaseURL: "https://mcity-6348e.firebaseio.com",
    projectId: "mcity-6348e",
    storageBucket: "mcity-6348e.appspot.com",
    messagingSenderId: "928958591424",
    appId: "1:928958591424:web:0511b4ccd20dc1fd"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}