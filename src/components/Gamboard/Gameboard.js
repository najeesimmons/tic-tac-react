import { useState } from "react";
import Box from "../Box/Box";
import { GameBoardWrapper } from "./Gameboard.styles";

// const boxes = Array.from({ length: 9 }, (v, i) => i).map((boxNumber) => {
//   return <Box key={`box_${boxNumber}`} />;
// });

function Gameboard() {
  const [position, setPosition] = useState([[], [], []]);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const handleClick = (e) => {
    e.preventDefault();
    if (currentPlayer === "x") {
      console.log(currentPlayer)
      setCurrentPlayer("o");
      console.log(currentPlayer)
    } else {
      setCurrentPlayer("x");
      console.log(currentPlayer)
    }
    // must add winning conditions + check here

    // usestate "isGameOver"
  };
  // position = [x][y]
  const renderBoxes = (v, i) => {
    let x, y;
    const row1 = [0, 1, 2];
    const row2 = [3, 4, 5];
    const row3 = [6, 7, 8];

    if (row1.includes(i)) {
      x = 0;
    } else if (row2.includes(i)) {
      x = 1;
    } else if (row3.includes(i)) {
      x = 2;
    }

    return (
      <Box
        key={`box_${i}`}
        currentPlayer={currentPlayer}
        handleClick={handleClick}
        index={i}
      />
    );
  };
  const boxes = Array.from({ length: 9 }, renderBoxes);

  return (
    <>
      <h1>React-Tac-Toe</h1>
      <GameBoardWrapper>
        {boxes}
        {/* ^ array of components */}
      </GameBoardWrapper>
    </>
  );
}

export default Gameboard;
