import React  from "react";
import '../styles/login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import conectarFirebase from "../components/conectar";
import { getAuth, signInWithEmailAndPassword ,signOut } from "firebase/auth";





class Miloginfrm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            usuario: "",
            password: ""
        }
    }
    loginOutSubmit = (e) => {
      e.preventDefault();
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Adios : " + this.state.usuario);
        this.props.logout()
        this.props.setUser("")
        this.setState({usuario: ""});
        this.setState({password: ""});
      }).catch((error) => {
        // An error happened.
      });

    }
      // Your web app's Firebase configuration
    loginSubmit = (e) => {
      e.preventDefault();
      conectarFirebase();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.state.usuario, this.state.password)
      .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("Bienvenido " + this.state.usuario);
          //Abrir el catalogo
          this.props.login()
          this.props.setUser( this.state.usuario)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error login  " + errorCode + ";" + errorMessage );
        });
    }; 
    setEmail = (e) => {
      this.setState({usuario: e.target.value});
    }
    setPassword = (e) => {
      this.setState({password: e.target.value});
    }
    
    render(){
        return (
            <div className="App">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-4">
                    <form id="loginform" onSubmit={this.loginSubmit}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="EmailInput"
                          name="EmailInput"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={this.setEmail}
                          value={this.state.usuario}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={this.setPassword}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                    <form id="loginOutform" onSubmit={this.loginOutSubmit}>
                    <button type="submit" className="btn btn-primary">
                        Log out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>);
    }
}

export default Miloginfrm;
