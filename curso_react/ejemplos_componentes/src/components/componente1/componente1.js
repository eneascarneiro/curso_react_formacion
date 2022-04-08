import React from "react";
import "./componente1.css";
import ComponenteClase2 from "../componente2/componente2";

class ComponenteClase extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      sumaedadhijos: 0,
       nombreultimohijo: '',
    };
  }
  hijonombrado = async  (edad) => {
    console.log("llamado:" + edad + " se suma a this.state.sumaedadhijos  , " + this.state.sumaedadhijos )
    //setState se ejecuta de forma asincrona 
    // Correct
    await  this.setState((prevState, props) => ({
        sumaedadhijos: prevState.sumaedadhijos + edad
      }));

  }
  actualizarEstado = () =>{
    this.props.updateItem(this.state)
  }

    render(){
          return (
          <div>
            <h1>Soy el padre  y la edad de mis hijos suma: {this.state.sumaedadhijos}</h1>
            <p> Y mis hijos son</p>
            
            <ComponenteClase2  value={23} nombre={"luis"} tellamohijo ={(edad) => this.hijonombrado(edad)}/>
            <ComponenteClase2 value={20}  nombre={"Pedro"} tellamohijo ={(edad) => this.hijonombrado(edad)}/>
            <ComponenteClase2 value={16} nombre={"Carmen"} tellamohijo ={(edad) => this.hijonombrado(edad)}/>
            <ComponenteClase2 value={5} nombre={"luisa"} tellamohijo ={(edad) => this.hijonombrado(edad)}/>
            </div>);
    }
}

export default ComponenteClase;
