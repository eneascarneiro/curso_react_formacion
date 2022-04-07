import React from "react";
import "./componente2.css";

class ComponenteClase2 extends React.Component
{
  componentDidMount(){
    this.props.tellamohijo()
    console.log("ejecutando componentDidMount ")
  }
    render(){
          return (
          <div>
          <h1>Soy {this.props.nombre} y me llama mi padre</h1>
          <p>y tengo {this.props.value} años</p>
          </div>
          );
    }
}

export default ComponenteClase2;
