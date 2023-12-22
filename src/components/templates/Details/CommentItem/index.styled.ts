import styled from "styled-components";

export const CommentItem = styled.div`
  border-radius: 10px;
  display: block;
  flex-wrap: wrap;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.iconColor};
  box-shadow: 0px 2px 5px ${(props) => props.theme.shadowColor};
`;

export const CommentText = styled.div`
  margin-top: -10px;
  hyphens: auto;
  color: ${(props) => props.theme.WhiteAndBlack};
  font-family: "Roboto";
  font-size: ${(props) => props.theme.textSizeTextM};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM700};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
`;

export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const UserName = styled.div`
    font-weight: ${(props) => props.theme.textSizeTextL};;
    color: #79c142;
    opacity: 1;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${(props) => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${(props) => props.theme.textSizeTextM500};
    }
`;

export const Date = styled.div`
    margin-right:15px;
    opacity:.6
`;

export const deleteButton = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

export const deleteIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
`;