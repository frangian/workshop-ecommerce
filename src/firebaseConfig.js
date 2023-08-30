// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrZy5AsswukEftb2mYu5KTfcVaPve6cSw",
  authDomain: "workshop-ecommerce-30324.firebaseapp.com",
  projectId: "workshop-ecommerce-30324",
  storageBucket: "workshop-ecommerce-30324.appspot.com",
  messagingSenderId: "508479929175",
  appId: "1:508479929175:web:d39db7fe8d4f720b089c12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inicio authentication
const auth = getAuth(app);

// login
export const onSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// logout

export const logout = async () => {
  signOut(auth);
};

// login con google

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res;
};

// registro

export const registro = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// recuperar contraseña

export const forgotPassword = async (email) =>{
  await sendPasswordResetEmail(auth, email)
}
