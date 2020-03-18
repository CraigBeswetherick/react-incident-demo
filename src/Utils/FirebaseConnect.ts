import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAbD5tFyFl1aZUuf7w8pt70ybyHNTxB_08",
  authDomain: "she-test-8afd3.firebaseapp.com",
  databaseURL: "https://she-test-8afd3.firebaseio.com",
  projectId: "she-test-8afd3",
  storageBucket: "she-test-8afd3.appspot.com",
  messagingSenderId: "789761822085",
  appId: "1:789761822085:web:3a637b4b95fecafa0588ec",
  measurementId: "G-7BB647REKF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  console.warn(
    "%c Init Firebase App: " + config.projectId,
    "background: #222; color: #bada55; padding: 6px; border-radius:2px"
  );
}
