import React from "react";
import '../styles/footer.css';

class PiePagina extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }
    render() {
      return <div><h2 className ="header2">{this.props.txtHeader }</h2></div>;
    }
  }

export default PiePagina;