import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { TextField } from '@mui/material';




class Mifrm1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            valor_1: "",
            valor_2: "",
            valor_3: "",
            valor_4: "",
            resultado:"",
            resultado1:"",
        }
    }
   
    setvalor_1 = (e) => {

      this.setState({valor_1: e.target.value});
        this.ConcatenaResultado(e);
      
    }
    setvalor_2 = (e) => {
      this.setState({valor_2: e.target.value});
        this.ConcatenaResultado1(e);
      }
    setvalor_3 = (e) => {
        this.setState({valor_3: e.target.value});
        this.ConcatenaResultado(e);
      }
    setvalor_4 = (e) => {
        this.setState({valor_4: e.target.value});
        this.ConcatenaResultado1(e);
      }
    ConcatenaResultado(e) {
      e.persist();
      this.setState(() => ({
          resultado: this.state.resultado + e.target.value
        }));
      }
    ConcatenaResultado1(e) {
          e.persist();
          this.setState(() => ({
              resultado1: this.state.resultado1 + e.target.value
            }));
        }
    
    /*ConcatenaResultado () {
    
      this.setState({
          resultado: this.state.valor_1 + this.state.valor_2 + this.state.valor_3
        });
    }*/
    
    render(){
        return (
            <div className="App">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-4">
                    <form id="loginform" onSubmit={this.loginSubmit}>
                      <div className="form-group">
                        <label>Valor 1</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.valor_1}
                          id="Valor1Input"
                          name="Valor1Input"                          
                          placeholder="Introduce el texto"
                          onChange={this.setvalor_1}
                        />
                      </div>
                      <div className="form-group">
                        <label>Valor 2</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.valor_2}
                          id="Valor2Input"
                          name="Valor2Input"                          
                          placeholder="Introduce el texto"
                          onChange={this.setvalor_2}
                        />
                      </div>
                      <div className="form-group">
                        <label>Valor 3</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.valor_3}
                          id="Valor3Input"
                          name="Valor3Input"                          
                          placeholder="Introduce el texto"
                          onChange={this.setvalor_3}
                        />
                      </div>
                      <div className="form-group">
                        <label>Valor 4</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.valor_4}
                          id="Valor4Input"
                          name="Valor4Input"                          
                          placeholder="Introduce el texto"
                          onChange={this.setvalor_4}
                        />
                      </div>
                      
                      <TextField
                        value={this.state.resultado}
                        />
                        <TextField
                        value={this.state.resultado1}
                        />
                    </form>
               
                  </div>
                </div>
              </div>
            </div>);
    }
}

export default Mifrm1;
