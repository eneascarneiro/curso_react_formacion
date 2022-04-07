// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
function conectarFirebase(){
        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyD_qwPFSCaueiiu1WS-k7j_fTlBE4KBiSo",
        authDomain: "micatalogojma.firebaseapp.com",
        projectId: "micatalogojma",
        storageBucket: "micatalogojma.appspot.com",
        messagingSenderId: "1042617777336",
        appId: "1:1042617777336:web:b2af904bbab9fdfea7484d"
        };
        initializeApp(firebaseConfig);
        return 1;
}
export default conectarFirebase;