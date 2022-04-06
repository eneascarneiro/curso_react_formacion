import React    from "react";
import Board  from '../board/board';
import './game.css';

class Game extends React.Component {

  render() {
    console.log("en game")
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
}

export default Game;