
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, signOut, signInWithEmailAndPassword, 
    signInWithPopup, createUserWithEmailAndPassword,
    onAuthStateChanged} from 'firebase/auth';

import {doc, getFirestore, setDoc, getDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

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

export const db = getFirestore();

 //function for google auth access
 export const googleSignIn = async()=>{
    return await signInWithPopup(auth, provide);
}

// Function for savin the user login data in the firebase DB 
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

// check the user data for login and then create the auth for that user
export const createUserWithEmail = async (email, password)=>{
   return await createUserWithEmailAndPassword(auth, email,password)
}

// check the user auth and is it's ok pass it for login access and provide CRED access
export const SignInWIthEmail = async (email, password) =>{
    return await signInWithEmailAndPassword(auth, email, password);
}

// function for sign out the user 
export const signOutUser = async() =>{
    await signOut(auth);
}
// this function will be execution whenever there is any change in authonticaion access for user
export  const authChange =  async(callback)=>{
    await onAuthStateChanged(auth , callback)
}




//this is a 1 time function used for loading the data which is present in the file shop-data.js
// this function calls shop-data.js and load all the data in the firebase. once the data is loaded
// you can use the data directly from the forestore itself

const setTheCollections =  async (collectionKey, collectionObject) =>{
    const refCollection = collection(db, collectionKey);
     const batch = writeBatch(db);

    collectionObject.forEach((objects) =>{
        const instanceCollection = doc(refCollection, objects.title.toLowerCase());
        batch.set(instanceCollection, objects);
    })
    await batch.commit();
    console.log('done');
}

// this function is used to fetch the data from the firestore so that we can save it in the 
// local state and use it 
export const getTheCOllections = async ()=>{
    const refinstance = collection(db, 'Category');
    const q = query(refinstance);
   const dataInstance =  await getDocs(q);
   const totalDataCategory = dataInstance.docs.reduce((acc, current) =>{
    const {items, title} = current.data();
    acc[title.toLowerCase()] = items;
    return acc;
   },{})
   return totalDataCategory;
}