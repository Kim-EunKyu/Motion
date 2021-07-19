import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeChecked, removeCard, Task } from "store/modules/card";

type TaskType = {
  no: number;
  title: string;
  body: Task[];
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
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

type TaskInfo = {
  isdone: boolean;
};

const CheckBox = styled.input``;

const Todo = styled.div<TaskInfo>`
  color: white;
  padding: 4px 8px;

  ${(props) =>
    props.isdone
      ? css`
          text-decoration: line-through;
        `
      : css`
          text-decoration: none;
        `}
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

const TaskCard = ({ no, title, body }: TaskType) => {
  const dispatch = useDispatch();
  const onClickRemoveCard = () => {
    dispatch(removeCard(no));
  };

  const onClickChecked = (index: number) => {
    dispatch(changeChecked({ no, index }));
  };

  return (
    <TaskCardBlock>
      <Body>
        <Title>{title}</Title>
        {body.map((todoList, index) => (
          <TaskBlock key={index}>
            <CheckBox
              type="checkbox"
              checked={todoList.isdone}
              onClick={() => onClickChecked(index)}
            />
            <Todo isdone={todoList.isdone}>{todoList.todo}</Todo>
          </TaskBlock>
        ))}
      </Body>
      <Right>
        <RemoveBtn onClick={onClickRemoveCard}>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveBtn>
      </Right>
    </TaskCardBlock>
  );
};

export default TaskCard;
