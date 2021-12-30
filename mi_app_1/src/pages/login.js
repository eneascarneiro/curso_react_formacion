import React  from "react";
import '../styles/login.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Miloginfrm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            CatCargado: false,
            userLogged: true,
            usuario: "",
            password: ""
        }
    }
    loginSubmit = (e) => {
      e.preventDefault();
      if (this.state.usuario === "maria@midominio.com" && this.state.password === "maria01"){
        console.log("Maria está logeada");
      }
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
                  </div>
                </div>
              </div>
            </div>);
    }
}

export default Miloginfrm;
