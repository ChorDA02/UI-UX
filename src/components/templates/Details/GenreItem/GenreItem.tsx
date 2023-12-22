import React from "react";
import * as Style from "./index.styled";

type GenreType = {
  text: string;
};
const GenreItem: React.FC<GenreType> = (props) => {
  return (
    <Style.GenreItem>
      {props.text}
    </Style.GenreItem>
  );
};

export default GenreItem;
