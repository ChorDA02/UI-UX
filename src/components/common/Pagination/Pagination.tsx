import React from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import * as Style from "./index.styled";

type PaginationProps = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (element: number, page: number) => void;
};
const Pagination: React.FC<PaginationProps> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pag_len;

  if (useWindowSize()[0] > 600) {
    pag_len = 0;
  } else {
    pag_len = 5;
  }
  if (useWindowSize()[0] < 300) {
    pag_len = 7;
  }

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let leftPageNumber = props.currentPage-2;
  let rightPageNumber = props.currentPage+8-pag_len;

  let pagesElements = pages
    .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
    .map((element) => {
      if (element === props.currentPage) {
        return (
          <Style.ActiveItem key={`pagination${element}`}>
            {element}
          </Style.ActiveItem>
        );
      } else {
        return (
          <Style.Item
            key={`pagination${element}`}
            onClick={() => props.onPageChange(element, props.pageSize)}
          >
            {element}
          </Style.Item>
        );
      }
    });

  return (
    <Style.Pagination>
      <Style.Content>
        {props.currentPage > 3 && (
          <Style.Item onClick={() => props.onPageChange(1, props.pageSize)}>
            1
          </Style.Item>
        )}
        {pagesElements}
        {props.currentPage < pagesCount-8+pag_len && (
          <Style.Item onClick={() => props.onPageChange(pagesCount, props.pageSize)}>
            {pagesCount}
          </Style.Item>
        )}
      </Style.Content>
    </Style.Pagination>
  );
};
export default Pagination;
