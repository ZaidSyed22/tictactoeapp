import React from "react";
import Square from "./Square";


//functional component Board
// line 7 "props" are squares, onClick
// line 11 "i" is used for value of key for simplistic purposes otherwise the value of key would be something like an API
// in this function we are mapping over each square than passing the square into a square Component along with the index

const Board = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((square, i) => ( 
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default Board; 