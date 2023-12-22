import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull, VscPlayCircle } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Cards>
          <Style.DescTop>
            <Style.Year>{props.year}</Style.Year>
            <Style.Language>{props.language.toUpperCase()}</Style.Language>
          </Style.DescTop>
          <Style.DescBottom>
            {props.title}
            <Style.Name><VscStarFull /> {props.rating} / 10</Style.Name>
          </Style.DescBottom>
          <Style.Mask>
            <Style.Card1 src={props.medium_cover_image} alt={props.medium_cover_image}></Style.Card1>
          </Style.Mask>
          <Style.Card2>
            <Style.PlayIcon>
              <VscPlayCircle />
            </Style.PlayIcon>
          </Style.Card2>
        </Style.Cards>
      </Link>
    </Style.Film>
  );
};

export default Film;
