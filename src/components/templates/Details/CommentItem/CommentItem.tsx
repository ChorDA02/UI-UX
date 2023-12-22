import React, { useState, useEffect } from "react";
import * as Style from "./index.styled";
import { FaTrashAlt } from "react-icons/fa";

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
  time: string; // Corrected type for time
};

const CommentItem: React.FC<
  CommentProps & {
    comments: CommentProps[];
    setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
  }
> = ({ id, userName, commentText, time, comments, setComments }) => {
  const [localComments, setLocalComments] = useState<CommentProps[]>(comments);

  const handleDelete = () => {
    const updatedComments = localComments.filter(
      (comment) => comment.id !== id,
    );
    setLocalComments(updatedComments);
    setComments(updatedComments);
  };

  return (
    <Style.CommentItem>
      <Style.CommentContent>
        <Style.UserName>
          {userName}
        </Style.UserName>
        <Style.deleteButton>
          <Style.Date>{time}</Style.Date>
          <Style.deleteIcon onClick={handleDelete}><FaTrashAlt /></Style.deleteIcon>
        </Style.deleteButton>
      </Style.CommentContent>
      <Style.CommentContent>
        <Style.CommentText>{commentText}</Style.CommentText>
      </Style.CommentContent>
    </Style.CommentItem>
  );
};

export default CommentItem;