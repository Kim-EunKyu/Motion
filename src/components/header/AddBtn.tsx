import React, { useState } from "react";
import styled from "styled-components";
import CardModal from "./CardModal";

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
  margin-left: 10px;
  /* & + & {
    margin-left: 10px;
  } */
`;

const AddBtn: React.FC<AddBtnProps> = ({ name }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickModal = () => {
    setIsClicked(!isClicked);
  };

  const setStateIsClicked = () => {
    setIsClicked(false);
  };

  return (
    <>
      {isClicked && <CardModal setState={setStateIsClicked} name={name} />}
      <AddBtnBlock onClick={onClickModal}>{name}</AddBtnBlock>
    </>
  );
};

export default AddBtn;
