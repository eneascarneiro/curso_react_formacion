import React    from "react";
import './square.css'
class Square extends React.Component {

  render() {
    console.log("en square")
    return (
      <button className="square"
      onClick={() => this.props.onClick()}>
      {this.props.value}
      </button>
    );
  };
}

export default Square;
