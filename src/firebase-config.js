import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore' ;

const firebaseConfig = {
    apiKey: "AIzaSyCGNJWKri51_BSd0uoy6CA-pbGrveUH-fk",
    authDomain: "curd-c2eb8.firebaseapp.com",
    projectId: "curd-c2eb8",
    storageBucket: "curd-c2eb8.appspot.com",
    messagingSenderId: "373208188876",
    appId: "1:373208188876:web:6c5db8cc5f1debf1f53f69"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);