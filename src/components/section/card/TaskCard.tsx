import React from "react";
import styled from "styled-components";

type Task = {
  title: string;
  url: string;
};

const TaskCardBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.49);
`;

const Frame = styled.iframe`
  flex: 6;
  border: none;
`;

const Title = styled.div`
  flex: 4;
  color: #ffef5b;
  padding: 8px 6px;
`;

const TaskCard: React.FC<Task> = ({ title, url }) => {
  return (
    <TaskCardBlock>
      <Frame src={url}></Frame>
      <Title>{title}</Title>
    </TaskCardBlock>
  );
};

export default TaskCard;
