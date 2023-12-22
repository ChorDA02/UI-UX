import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";
import Link from "next/link";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 50;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Wrap>
      <Style.WrapCenter>
        <Style.Films>
          <Style.Content>
            <Style.Logo>
              <Link href={"/"}><Style.Img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Video-film.svg"></Style.Img></Link>
            </Style.Logo>
            <Style.List>{filmsList}</Style.List>
            <Pagination
              totalUsersCount={filmList?.data?.movie_count}
              currentPage={page}
              pageSize={pageSize}
              onPageChange={(page) => setPage(page)}
            />
          </Style.Content>
        </Style.Films>
      </Style.WrapCenter>
    </Style.Wrap>
  ) : null;
};

export default Films;
