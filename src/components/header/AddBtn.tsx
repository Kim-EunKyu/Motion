import React from "react";
import styled from "styled-components";

interface AddBtnProps {
  name: string;
}

const AddBtnBlock = styled.button`
  background-color: #e24000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 30px;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
`;

const AddBtn: React.FC<AddBtnProps> = ({ name }) => {
  return <AddBtnBlock>{name}</AddBtnBlock>;
};

export default AddBtn;
