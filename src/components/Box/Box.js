import { BoxWrapper } from "./Box.styles";
import { useState } from "react"

function Box(props) {
  return <BoxWrapper>{props.index}</BoxWrapper>;
}

export default Box;
