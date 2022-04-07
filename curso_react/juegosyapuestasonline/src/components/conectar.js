// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
function conectarFirebase(){
        // Your web app's Firebase configuration
        
        const firebaseConfig = {
                apiKey:process.env.REACT_APP_APIKEY,
                authDomain:process.env.REACT_APP_AUTHDOMAIN,
                projectId:process.env.REACT_APP_PROJECTID,
                storageBucket:process.env.REACT_APP_STORAGEBUCKET,
                messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
                appId:process.env.REACT_APP_APPID
        };
        console.log(firebaseConfig)
        initializeApp(firebaseConfig);
        return 1;
}
export default conectarFirebase;