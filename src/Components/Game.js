import React, { useState} from "react";
import { calculateWinner } from "./Calculatewinner";
import Board from "./Board";

//functional component Game
//All logic are in this js
// Line 22 is setting a functional history and using UseState to set Array of 9 because tic tac toe has 3 down and 3 across and fill it null as its initial state.
// Line 23 is setting a functional Step Number as in what step we are on in the game
// Line 24 is setting a functional xIsNext and useState initial value is "true" because x will always start first in the game
// Line 25 is setting a functional Winner where we pass "history" (array of steps we taken) and "stepNumber" to calculate a winner
// Line 26 is setting a functional xO to basically  determine whether we are going to put an "o" or an "x" to the square
// Line 28 is the onClick function we passed in "Square.js"
// Line 29/30 is the historyPoint function to know the history of the game from start to that current point and nothing passed that
// Line 31 is the is using a "spread operator ... with current" to make a copy of current history (from start of the game to where you stopped) 
// Line 33 Return if won or occupied basically stating if a square has an x or an o than return telling it not do anything and same concept applies if someone is a winner where no action can be taken on that square
// Line 34 If game is not over and square is not selected than basically lets you select a square
// Line 55/68 is where the Return function/ and in line 63 we are saying If winner is true than we say "Winner" or we say Next Player either an x or an o
// Line 62 renderMoves function is basically rendering the history line 45/53 (we are mapping through each move and saying if move is not zero than go to that move and if its zero than go to start essentially we are returning a list item with key and button on click)
// Line 40/43 is setting a functional "jumpTo" than we set setStepNumber to step than set xIsNext and to figure out if its "x" or "o" we use remainder so its its divisible by 2 we say it should be on "o" otherwise it would be on "x"
 
const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "❌" : "⭕";
  
    const handleClick = (i) => {
      const historyPoint = history.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const squares = [...current];
     
      if (winner || squares[i]) return;
      squares[i] = xO;
      setHistory([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setXisNext(!xIsNext);
    };
  
    const jumpTo = (step) => {
      setStepNumber(step);
      setXisNext(step % 2 === 0);
    };
  
    const renderMoves = () =>
      history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : "New Game";
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{destination}</button>
          </li>
        );
      });
  
    return (
      <>
        <h1>⭕❌⭕ React Tic Tac Toe ⭕❌⭕</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History:</h3>
            {renderMoves()}
          </div>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
      </>
    );
  };
  
  export default Game;