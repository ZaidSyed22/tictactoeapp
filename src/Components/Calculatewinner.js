//comes from react documentation "https://reactjs.org/tutorial/tutorial.html" which uses "classes" but we are using "hooks"
//purposes of this helper.js function is to calculate a winner just as its listed on the react documentation
//it goes through line 7 to 14 to calculate a possible combination win as their is total of 9 items in the array and only 8 possible scenarios where you can win

export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }