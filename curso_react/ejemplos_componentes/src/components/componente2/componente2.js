import React from "react";
import "./componente2.css";

class ComponenteClase2 extends React.Component
{

  componentDidMount(){
    console.log("ejecutando componentDidMount antes u soy : " + this.props.nombre )
    this.props.tellamohijo(this.props.value,this.props.colorpelo)
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
