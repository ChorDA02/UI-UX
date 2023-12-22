import React from "react";
import * as Style from "./index.styled";
import Link from "next/link";

const Header: React.FC = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Link href={"/"}><Style.Img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Video-film.svg"></Style.Img></Link>
        </Style.Logo>

      </Style.Content>
    </Style.Header>
  );
};
export default Header;
