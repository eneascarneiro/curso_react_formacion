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
       colorespelo: '',
       ultimocolorpelo:'',
    };
  }
  hijos=[
    {
      nombre: "pedro",
      edad: 45,
      color: "rubio"
    },
    {
      nombre: "pedro",
      edad: 45,
      color: "rubio"
    }
  ]
  //Se pinta con map
  hijonombrado = async  (edad,colorpelo) => {
    console.log("llamado:" + edad + " se suma a this.state.sumaedadhijos  , " + this.state.sumaedadhijos )
    //setState se ejecuta de forma asincrona 
    // Correct
    await  this.setState((prevState,gato,props) => ({
        sumaedadhijos: prevState.sumaedadhijos + edad,
        colorespelo: prevState.colorespelo + "," + colorpelo,
        ultimocolorpelo: colorpelo,
      }));
  }
/*
  nombrefuncionasincrona = async (param1, param2,..) => {
    //Logica

    await accion
  }

  nombrefuncionsincrona =  (param1, param2,..) => {
    //Logica

     accion
  }
  */
  componentDidMount(){
    console.log("ejecutando componentDidMount en el padre ")
  }
    render(){
          return (
          <div>
            <h1>Soy el padre  y la edad de mis hijos suma: {this.state.sumaedadhijos}</h1>
            <p> Y mis hijos son</p>
            
            <ComponenteClase2  value={23} nombre={"luis"} colorpelo={"rubio"} tellamohijo ={(uno,dos) => this.hijonombrado(uno,dos)}/>
            <ComponenteClase2 value={20}  nombre={"Pedro"} colorpelo={"moreno"} tellamohijo ={(tres,cuatro) => this.hijonombrado(tres,cuatro)}/>
            <ComponenteClase2 value={16} nombre={"Carmen"} colorpelo={"rojo"} tellamohijo ={(edad,colorpelo) => this.hijonombrado(edad,colorpelo)}/>
            <ComponenteClase2 value={5} nombre={"luisa"} colorpelo={"verde"} tellamohijo ={(edad,colorpelo) => this.hijonombrado(edad,colorpelo)}/>
            <p> Y los colores de pelo son: {this.state.colorespelo}, y el útimo color de pelo es: {this.state.ultimocolorpelo}</p>
            </div>);
    }
}

export default ComponenteClase;
