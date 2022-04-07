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
  hijonombrado(edad){
    var sumaedades = this.state.sumaedadhijos + edad
    this.setState({sumaedadhijos:sumaedades,})

  }
    render(){
          return (
          <div>
            <h1>Soy el padre  y la edad de mis hijos suma: {this.state.sumaedadhijos}</h1>
            <p> Y mis hijos son</p>
            <ComponenteClase2  value={10} nombre={"luis"} tellamohijo ={() => this.hijonombrado(this.props.value)}/>
            <ComponenteClase2 value={20}  nombre={"Pedro"} tellamohijo ={() => this.hijonombrado(this.props.value)}/>
            <ComponenteClase2 value={16} nombre={"Carmen"} tellamohijo ={() => this.hijonombrado(this.props.value)}/>
            <ComponenteClase2 value={5} nombre={"luisa"} tellamohijo ={() => this.hijonombrado(this.props.value)}/>
            </div>);
    }
}

export default ComponenteClase;
