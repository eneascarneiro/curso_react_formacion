import react from "react";

class cambio_datos extends react.Component{
  constructor(props){
    super(props);
    this.state= {
      campo1: "",
      campo2: "",
      resultado: "",
      cbValue1: false,
      cbValue2: false,
      cbValue3: false,
      cbValue4: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  lectura = ""
  async handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async modificarcampo1 (e) {
    console.log("campo1 :" + e.target.value)
    await this.setState({campo1:e.target.value})
    console.log("El valor guardado es: " + this.state.campo1 )
  }
  async modificarcampo2 (e) {
    console.log("campo2 :" + e.target.value)
    await this.setState({campo2: e.target.value})
    console.log("El valor guardado es: " + this.state.campo2 + " copiado de " +  e.target.value)
  }
  async modificarcheckBox1 (e) {
    console.log("cb1 :" + e.target.checked)
    await this.setState({cbValue1: e.target.checked})
    if(e.target.checked){
      await this.setState({cbValue2: false})
      await this.setState({cbValue3:true})
    }else{
      await this.setState({cbValue2: true})
      await this.setState({cbValue3: false})
    }
  }
  async modificarcheckBox2 (e) {
    console.log("cb2 :" + e.target.checked)
    await this.setState({cbValue2: e.target.checked})
  }
  async modificarcheckBox3 (e) {
    console.log("cb3 :" + e.target.checked)
    await this.setState({cbValue3: e.target.checked})
  }
  async modificarcheckBox4 (e) {
    console.log("cb4 :" + e.target.checked)
    await this.setState({cbValue4: e.target.checked})
  }
  Ejecutar = (e) => {
    e.preventDefault();
    if (this.state.campo1.length >  this.state.campo2.length ){
      console.log("el campo 1 es mas largo que el campo 2");
      this.setState({resultado: "el campo 1 es mas largo que el campo 2"})
    }
    else if (this.state.campo1.length ===  this.state.campo2.length ){
      console.log("ambos campos tienen la misma longitud");
      this.setState({resultado: "ambos campos tienen la misma longitud"})
    }
    else{
      console.log("el campo 2 es mas largo que el campo 1");
      this.setState({resultado: "el campo 2 es mas largo que el campo 1"})
    }
  }; 
  render(){
    return (
      <form id="loginform" onSubmit={this.Ejecutar}>
      <div>

      <input
        type="text"
        className="form-control"
        id="campo1"
        name="campo1"
        placeholder="introduce un valor"
        value = {this.state.campo1}
        onChange={(e) => this.modificarcampo1(e)}
      />
      <br></br>
      <input
      type="text"
      className="form-control"
      id="campo2"
      name="campo2"
      placeholder="introduce un valor"
      value = {this.state.campo2}
      onChange={(e) => this.modificarcampo2(e)}
      />
      <br></br>
      <textarea placeholder ={this.state.resultado}
      
      />
      <br></br>
      <input type="checkbox" id="cbox1"  checked={this.state.cbValue1} onChange={(e) => this.modificarcheckBox1(e)}></input>
      <input type="checkbox" id="cbox2" checked={this.state.cbValue2} onChange={(e) => this.modificarcheckBox2(e)}></input>

      <input type="checkbox" id="cbox3" checked={this.state.cbValue3} onChange={(e) => this.modificarcheckBox3(e)}></input>
      <input type="checkbox" id="cbox4" checked={this.state.cbValue4} onChange={(e) => this.modificarcheckBox4(e)}></input>

      <br></br>
      <button type="submit" className="btn btn-primary">
      Submit
      </button>
    </div>
    </form>
    );
  }
}
export default cambio_datos;
