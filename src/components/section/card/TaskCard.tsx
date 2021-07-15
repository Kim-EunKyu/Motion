import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeCard } from "store/modules/card";

type Task = {
  no: number;
  title: string;
  body: string;
};

const TaskCardBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.49);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 19;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  color: #ffef5b;
  padding: 8px 6px;
  margin: 10px 0;
`;

const TaskBlock = styled.div`
  color: white;
  padding: 4px 8px;
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

const TaskCard: React.FC<Task> = ({ no, title, body }) => {
  const dispatch = useDispatch();
  const onClickRemoveCard = () => {
    dispatch(removeCard(no));
  };

  return (
    <TaskCardBlock>
      <Body>
        <Title>{title}</Title>
        <TaskBlock>{body}</TaskBlock>
      </Body>
      <Right>
        <RemoveBtn onClick={onClickRemoveCard}>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveBtn>
      </Right>
    </TaskCardBlock>
  );
};

export default React.memo(TaskCard);
