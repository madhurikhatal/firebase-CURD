import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore' ;

const firebaseConfig = {
    apiKey: "AIzaSyCjnhCnb_iSyXD0BCWnr5BGOIN1wmhW2QA",
    authDomain: "curd-8bba8.firebaseapp.com",
    projectId: "curd-8bba8",
    storageBucket: "curd-8bba8.appspot.com",
    messagingSenderId: "874591369998",
    appId: "1:874591369998:web:6e3dfdf357834659ceb55f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);