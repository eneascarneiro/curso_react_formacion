
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
        const app = initializeApp(firebaseConfig);
        return app;
}
export default conectarFirebase;
// Import the functions you need from the SDKs you need
/*import firebase from '@firebase/app'
import React  from "react";
import app from '@firebase/app'


        // Your web app's Firebase configuration
class HandleFirebase extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        db: null,
                        app: "",
                }
        }
        firebaseConfig = {
                apiKey:process.env.REACT_APP_APIKEY,
                authDomain:process.env.REACT_APP_AUTHDOMAIN,
                projectId:process.env.REACT_APP_PROJECTID,
                storageBucket:process.env.REACT_APP_STORAGEBUCKET,
                messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
                appId:process.env.REACT_APP_APPID
                };
        conectarFirebase(){
                // check if firebase app has been initialized previously
                // if not, initialize with the config we saved earlier
                if (!app.apps.length) {
                        app.initializeApp(this.firebaseConfig);
                        this.setState({app:app})
                }
        }
        conectarFireStore(){
                this.conectarFirebase()
                const db = this.app.firestore();
                this.setState({db:db})
        }
        getProductos(fsname){
                this.conectarFireStore()
                firebase.db.collection("fsname")
                .get()
                .then(querySnapshot => {
                  const data = querySnapshot.docs.map(doc => doc.data());
                  console.log(data);
                  return data;
                });
        }

}

export default HandleFirebase;
*/