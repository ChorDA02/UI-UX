import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;
export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;
export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Wrap = styled.div`
    min-width:320px;
    position:relative;
    background-color: #000000
`;

export const WrapCenter = styled.div`
    max-width:1100px;
    margin:0 auto;
    position:relative;
    z-index:20;
    background-color: #FFFFFF
`;

export const Holder = styled.div`
    background: #ffffff;
    width: 100%;
    max-width: 1200px;
`;

export const Limited = styled.div`
    max-height: 200px;
    overflow: hidden;
    position: relative;
`;

export const LimitedBottom = styled.div`
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1) 100%);
    width: 100%;
    height: 120px;
    opacity: 1;
    transition: .3s;
`;

export const MoreButton = styled(Button)`
    background-color: #ededed;
    margin: -20px 0 0 0;
    color: #000000;
`;

export const Desc = styled.div`
    margin: 0 0 10px 0;
    position: relative;
    width: 100%;
`;

export const DescTop = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    z-index:10;
    padding:10px;
    color:#fff;
    text-align:left
`;

export const Language = styled.div`
    position:absolute;
    right:10px;
    z-index:5;
    padding:3px 5px;
    border-radius:3px;
    background-color:#79c142;
    color:#fff;
    font-weight:600;
    font-size:24px
`;

export const Comments = styled.div`
    margin-bottom:20px;
    padding-top:20px;
`;

export const CommentsTitle = styled.div`
    display:inline-block;
    vertical-align:top;
    margin-right:10px;
    padding-left:10px;
    font-size:24px;
    flex-direction: column;
`;

export const CurrentComments = styled.div`
    @media (min-width: 576px)  {
        width: 48%;
    }
`;

export const AddComment = styled.div`
    @media (min-width: 576px)  {
        width: 48%;
    }
`;

export const InputName = styled.input`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 32px;
    letter-spacing: 1px;
    margin-bottom: 10px;
`;

export const InputComment = styled.textarea`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 32px;
    resize: none;
    height: 160px;
    letter-spacing: 1px;
    margin-bottom: 10px;
`;

export const SubmitCommentButton = styled.button`
    cursor: pointer;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin: 0 5px 0 5px;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
    background-color: ${props => props.theme.accentColor1};
`;

export const CommentsRow = styled.div`
    @media (min-width: 576px)  {
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        -ms-flex-wrap:wrap;
        -webkit-flex-wrap:wrap;
        flex-wrap:wrap;
        -ms-flex-pack:justify;
        -webkit-justify-content:space-between;
        justify-content:space-between
    }
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
`;

export const Year = styled.div`
    position: absolute;
    z-index:5;
    padding:3px 5px;
    border-radius:3px;
    background-color:#79c142;
    color:#fff;
    font-weight:600;
    font-size:24px
`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;

`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

export const Logo = styled.div`
    display: center;
    width: 50%;
    flex: 1 1 auto; 
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
`;

export const Logotype = styled.img`
    display: center;
    height: 170px;
    width: 170px;
`;

export const CommentSection = styled.div`
  margin-bottom: 24px;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const UserNameInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const CommentText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const CommentItem = styled.div`
  background-color: ${(props) => props.theme.CardColor};
  padding: 8px 20px 8px 10px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TextArea = styled.textarea`
  width: 99.5%;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

export const UserCommentsText = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
  justify-content: start;
  margin: 30px 0px 30px 0px;
  text-align: start;
`;

export const Card = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    color: white;
`;

export const Cards = styled.div`
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.iconColor};
    width: 100%;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
        transition: all 0.3s ease;
        & ${Card}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Icons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 120px;
`;

export const TopIcon = styled.div`
    cursor: pointer;
    color:  ${props=> props.theme.accentColor1};
    margin: 0 0 10px 0;
`;

export const BottomIcon = styled.div`
    cursor: pointer;
    color:  ${props=> props.theme.accentColor1};
    margin: 10px 0 0 0;
`;