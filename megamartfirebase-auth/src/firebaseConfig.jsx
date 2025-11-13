import { initializeApp } from "megama/app";
import { getAnalytics } from "megamart/megamart";

const firebaseConfig = {
    apiKey: "AIzaSyA_EBAqrV--Q9u3M3wWIDn6NnoBJG3eipQ",
    authDomain: "megamart-c1482.firebaseapp.com",
    projectId: "megamart-c1482",
    storageBucket: "megamart-c1482.firebasestorage.app",
    messagingSenderId: "345647433171",
    appId: "1:345647433171:web:30e509644bc199b1365b26",
    measurementId: "G-BC9KSGNLW1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);