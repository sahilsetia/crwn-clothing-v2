
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';

import {doc, getFirestore, setDoc, getDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHW0uyO63eyeEEvX4twBMOiiOPd9ev9VE",
  authDomain: "shopping-db-2266b.firebaseapp.com",
  projectId: "shopping-db-2266b",
  storageBucket: "shopping-db-2266b.appspot.com",
  messagingSenderId: "892884781916",
  appId: "1:892884781916:web:4dc7e7dd1c60d45ec70f99"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

 const provide = new GoogleAuthProvider();

export const googleSignIn = async()=>{
    return await signInWithPopup(auth, provide);
}

export const db = getFirestore();

export const getCollectionDoc = async (userAuth, othervalue)=>{
    console.log(userAuth)
       const userDoc =   doc(db, 'users', userAuth.uid);

       const snapshot = await getDoc(userDoc);
       console.log(snapshot.exists());

       if(!snapshot.exists()){

        const{displayName, email} = userAuth;
        const time = new Date();

        try{
        await setDoc(userDoc, {displayName, email, time, ...othervalue});
        }catch(error){
            alert(`there is an error ${error.massage}`);
        }
       }
}

export const createUserWithEmail = async (email, password)=>{
   return await createUserWithEmailAndPassword(auth, email,password)
}

export const SignInWIthEmail = async (email, password) =>{
    return await signInWithEmailAndPassword(auth, email, password);
}