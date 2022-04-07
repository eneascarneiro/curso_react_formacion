import React from "react";
import '../styles/header.css';

class Cabecera extends React.Component{
    render() {
      return <div><h2 className ="header2">{this.props.txtHeader }</h2></div>;
    }
  }

export default Cabecera;