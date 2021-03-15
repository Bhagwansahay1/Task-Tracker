import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // hello
  apiKey: "AIzaSyC7d8cfDwHCkYqZdgVoQuBqbD7hBSxcwwU",
  authDomain: "task-traker-app.firebaseapp.com",
  projectId: "task-traker-app",
  storageBucket: "task-traker-app.appspot.com",
  messagingSenderId: "281393660672",
  appId: "1:281393660672:web:34cc7c66be6129ee1029e5",
  measurementId: "G-X7B7GP7KP1",
});

export const auth = app.auth();
export default app;
