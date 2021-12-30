import React ,  { useState } from "react";
import '../styles/login.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Miloginfrm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            CatCargado: false,
            userLogged: true
        }
    }


    
    render(){
        const loginSubmit = (e) => {

          };
        const setEmail = (e) => {

        };
        const setPassword = (e) => {

        };
        return (
            <div className="App">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-4">
                    <form id="loginform" onSubmit={loginSubmit}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="EmailInput"
                          name="EmailInput"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={(event) => setPassword(event.target.value)}
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
