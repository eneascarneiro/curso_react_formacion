import React from "react";
import Board from "./board";


class Game extends React.Component {
    render() {
        if (this.props.statusLog){
        return (
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        );
      }
      else{
        return (
            <div className="card">
                <h2>El usuario no esta logado</h2>
            </div>
        );
    }
    }
  }

  export default Game;