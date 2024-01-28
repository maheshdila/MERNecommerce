import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcwc_Zv2ouSEM7Z3aOsuLveVIFLyWvPio",
    authDomain: "mernstore-67961.firebaseapp.com",
    projectId: "mernstore-67961",
    storageBucket: "mernstore-67961.appspot.com",
    messagingSenderId: "833473135623",
    appId: "1:833473135623:web:43d1f4a09a53890f0696a2"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)


