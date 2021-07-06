import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type Note = {
  title: string;
  body: string;
};

const NoteCardBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.49);

  border: 1px solid yellow;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 19;
`;

const Title = styled.h2`
  /* flex: 4; */
  color: #ffef5b;
  padding: 8px 6px;
  margin: 10px 0;

  border: 1px solid blue;
`;

const NoteBlock = styled.div`
  /* flex: 6; */
  color: white;
  padding: 4px 8px;
  border: 1px solid red;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RemoveBtn = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  font-size: 16px;
  cursor: pointer;
`;

const NoteCard: React.FC<Note> = ({ title, body }) => {
  return (
    <NoteCardBlock>
      <Body>
        <Title>{title}</Title>
        <NoteBlock>{body}</NoteBlock>
      </Body>
      <Right>
        <RemoveBtn>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveBtn>
      </Right>
    </NoteCardBlock>
  );
};

export default NoteCard;
