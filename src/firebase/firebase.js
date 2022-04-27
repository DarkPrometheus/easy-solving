import { initializeApp } from "firebase/app";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes
} from "firebase/storage";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";
import { async } from "@firebase/util";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINSENDERID,
    appId: import.meta.env.VITE_APPID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExist(uid) {
    const docRef = doc(db, `users`, uid);
    const res = await getDoc(docRef);

    return res.exists();
}

export async function checkUserLoggedIn() {
    const user = await auth.currentUser;

    return user ? user.uid : null;
}

export async function registerNewUserDoc(user) {
    try {
        const collectionRef = collection(db, `users`);
        const docRef = doc(collectionRef, user.uid);
        await setDoc(docRef, user);
    } catch (error) {
        console.log(error);
    }
}
