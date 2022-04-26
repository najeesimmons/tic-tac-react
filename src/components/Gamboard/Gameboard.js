import Box from "../Box/Box";
import { GameBoardWrapper } from "./Gameboard.styles";

const renderBoxes = (v,i) => {
    return (
        <Box
        key={`box_${i}`}
        />
    )
}
const boxes = Array.from({length:9}, renderBoxes);

// const boxes = Array.from({ length: 9 }, (v, i) => i).map((boxNumber) => {
//   return <Box key={`box_${boxNumber}`} />;
// });

function Gameboard() {
  return (
    <GameBoardWrapper>
     {boxes}
     {/* ^ array of components */}
    </GameBoardWrapper>
  );
}

export default Gameboard;
