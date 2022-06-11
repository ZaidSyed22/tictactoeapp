import React from "react";

//functional component Square
// line 6 "props" are value, onClick
// line 9 "value" is what we going to use as x,0

const Square = ({ value, onClick }) => {
    return(
        <button onClick={onClick}>
            {value}
        </button>
    )
}


export default Square;