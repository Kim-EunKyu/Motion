import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "store/modules/card";
import styled, { css } from "styled-components";

// 타입 설정
type Modal = {
  setState: () => void;
  name: string;
};

//styled-components들
const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CardModalBlock = styled.div`
  width: 600px;
  padding: 10px;
  background-color: gray;
`;

interface RowProps {
  readonly alignItems?: string;
  readonly flexDirection?: string;
  readonly justifyContent?: string;
}

const ModalRow = styled.div<RowProps>`
  display: flex;
  flex-direction: column;

  & + & {
    margin-bottom: 10px;
  }

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${(props) =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}

    ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
`;

const Alert = styled.div`
  color: white;
  font-size: 12px;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  color: red;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  text-align: right;
  padding: 0 4px 0 0;
`;

const Title = styled.div``;

const Input = styled.input`
  width: 100%;
`;

const AddBtn = styled.button`
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

const CardModal: React.FC<Modal> = ({ setState, name }) => {
  const title: string = "Title";
  const input: string = name === "IMAGE" || name === "VIDEO" ? "URL" : "Body";

  const [titleContent, setTitleContent] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");

  const dispatch = useDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleContent(e.target.value);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const onClickAddCard = () => {
    if (titleContent === "" || inputContent === "") {
      return;
    }
    if (name !== "TASK") {
      dispatch(
        addCard({
          type: name.toLowerCase(),
          title: titleContent,
          body: inputContent,
        })
      );
    } else {
      let todo: any[] = [];
      const split = inputContent.split("/");
      split.forEach((elem) => {
        todo.push({ todo: elem, checked: false });
      });

      dispatch(
        addCard({
          type: name.toLowerCase(),
          title: titleContent,
          body: todo,
        })
      );
    }
    setState();
  };

  return (
    <Dim>
      <CardModalBlock>
        <ModalRow alignItems="flex-end">
          <CloseBtn onClick={setState}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </ModalRow>
        <ModalRow alignItems="flex-start">
          <Title>{title}</Title>
          <Input value={titleContent} onChange={onChangeTitle}></Input>
        </ModalRow>
        <ModalRow alignItems="flex-start">
          <Title>{input}</Title>
          <Input value={inputContent} onChange={onChangeInput}></Input>
        </ModalRow>
        <ModalRow
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {name === "TASK" ? (
            <>
              <Alert>
                Task를 구분하기 위해서 /(슬래쉬)로 구분하여 작성하시면 됩니다.
              </Alert>
              <AddBtn onClick={onClickAddCard}>Add</AddBtn>
            </>
          ) : (
            <>
              <Alert></Alert>
              <AddBtn onClick={onClickAddCard}>Add</AddBtn>
            </>
          )}
        </ModalRow>
      </CardModalBlock>
    </Dim>
  );
};

export default CardModal;
