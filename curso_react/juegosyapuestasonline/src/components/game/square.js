import React from "react";
import './game.css'

class  Square  extends React.Component {
    render(){
    return (
        <button className="square"
        onClick={() => this.props.onClick()}>
        {this.props.value}
        </button>
        );
    }
}
export default Square;