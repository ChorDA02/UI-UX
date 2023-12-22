import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscStarFull, VscCommentDiscussion } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CommentProps } from "./CommentItem/CommentItem";
import CommentItem from "./CommentItem/CommentItem";
import { BiSolidDownload, BiPlayCircle, BiLike } from "react-icons/bi";
import { FaDownload, FaEye } from "react-icons/fa";
const Details = () => {
  var pageKey = "";
  if (typeof window !== "undefined" && window.localStorage) {
    pageKey = window.location.href;
  }
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );
  const [comments, setComments] = useState<CommentProps[]>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });

  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments]);
  let len = filmRetrieve?.data.movie.description_full.length || 0;
  const [show, setShow] = useState(len > 0 ? true : false);
  const changeStyle = () => {
    setShow(false);
  }
  if (isLoading) {
    return <Loader />;
  }
  function commentsList() {
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim() !== "" && commentText.trim() !== "") {
        const currentDate = new Date().toLocaleDateString();
        const newComment: CommentProps = {
          id: comments.length + 1,
          userName: userName,
          commentText: commentText,
          time: currentDate,
        };
        setComments([...comments, newComment]);
        setUserName("");
        setCommentText("");
      } else {
        alert(
          "Please enter both your user name and comment before submitting.",
        );
      }
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(
      event: React.ChangeEvent<HTMLTextAreaElement>,
    ) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentItem
        key={comment.id}
        id={comment.id}
        userName={comment.userName}
        commentText={comment.commentText}
        time={comment.time}
        comments={comments}
        setComments={setComments}
      />
    ));
    return (
      <Style.CommentSection>
        <Style.CommentsRow>
          {commentItems.length > 0 ? (
            <Style.CurrentComments>{commentItems}</Style.CurrentComments>
          ) : (
            <Style.CurrentComments>This film wasn't commented yet.</Style.CurrentComments>
          )}
          <Style.AddComment>
            <Style.CommentForm onSubmit={addComment}>
              <Style.UserInfo>
              <Style.InputName
                  placeholder="Name"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </Style.UserInfo>

              <Style.InputComment placeholder="Comment"
                value={commentText}
                onChange={(e) => handleCommentTextChange(e)}
              />

              <Style.SubmitCommentButton>Submit comment</Style.SubmitCommentButton>
            </Style.CommentForm>
          </Style.AddComment>
        </Style.CommentsRow>
      </Style.CommentSection>
    );
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });
  return (
    <Style.Wrap>
      <Style.WrapCenter>
        <Style.Details>
          <Style.Content>
            <Style.Logo>
              <Link href={"/"}><Style.Logotype src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Video-film.svg"></Style.Logotype></Link>
            </Style.Logo>
            <Style.Data>
              <Style.Image>
                <Style.Desc>
                  <Style.Cards>
                    <Style.Img
                      src={filmRetrieve?.data.movie.large_cover_image}
                    ></Style.Img>
                    <Style.DescTop>
                      <Style.Year>{filmRetrieve?.data.movie.year}</Style.Year>
                      <Style.Language>{filmRetrieve?.data.movie.language.toUpperCase()}</Style.Language>
                    </Style.DescTop>
                    <Style.Card>
                      <Style.Icons>
                        <Link href={filmRetrieve?.data.movie.url || ""}>
                          <Style.TopIcon>
                            <BiPlayCircle />
                          </Style.TopIcon>
                        </Link>
                        <Link href={filmRetrieve?.data.movie.url || ""}>
                          <Style.BottomIcon>
                            <BiSolidDownload />
                          </Style.BottomIcon>
                        </Link>
                      </Style.Icons>
                    </Style.Card>
                  </Style.Cards>                 
                </Style.Desc>
                <Style.Torrents>{torrentsList}</Style.Torrents> 
              </Style.Image>

              <Style.Description>
                <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>
                <Style.Title>{genresList}</Style.Title>
                <Style.Statistic>
                  <StatisticItem
                    icon={<VscStarFull />}
                    text={filmRetrieve?.data.movie.rating}
                  ></StatisticItem>
                  <StatisticItem
                    icon={<BiLike />}
                    text={filmRetrieve?.data.movie.like_count}
                  ></StatisticItem>
                  <StatisticItem
                    icon={<FaEye />}
                    text={filmRetrieve?.data.movie.runtime}
                  ></StatisticItem>
                  <StatisticItem
                    icon={<FaDownload />}
                    text={filmRetrieve?.data.movie.download_count}
                  ></StatisticItem>
                </Style.Statistic>
                <Style.Holder>
                  {show ? (
                    <Style.Limited>
                      <Style.DescriptionFull>
                        {filmRetrieve?.data.movie.description_full}
                      </Style.DescriptionFull>
                      <Style.LimitedBottom></Style.LimitedBottom>
                    </Style.Limited>
                  ) : (
                    <Style.DescriptionFull>
                      {filmRetrieve?.data.movie.description_full}
                    </Style.DescriptionFull>
                  )}
                </Style.Holder>
                {show ? (
                  <Style.MoreButton onClick={changeStyle}>More</Style.MoreButton>
                ) : (<span></span>)}
              </Style.Description>
            </Style.Data>
            <Style.Comments>
              <Style.CommentsTitle>Leave a comment <VscCommentDiscussion /></Style.CommentsTitle>
              <Style.CommentItem>{commentsList()}</Style.CommentItem>
            </Style.Comments>
          </Style.Content>
        </Style.Details>
      </Style.WrapCenter>
    </Style.Wrap>
  );
};

export default Details;
