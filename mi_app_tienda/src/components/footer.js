import React from "react";
import '../styles/footer.css';

class PiePagina extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="row footer2">
            <div className="col-sm">
              <h3 className="sth3" >{this.props.txtNombre }</h3>
            </div>
            <div className="col-sm">
              <a className="black_text" href={this.props.txtURL}>Te invito a conocerme</a>
            </div>
        </div>
      );
    }
  }

export default PiePagina;