import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Video = {
  title: string;
  url: string;
};

const VideoCardBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.49);
`;

const Body = styled.div`
  display: flex;
  flex: 19;
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

const Frame = styled.iframe`
  flex: 6;
  border: none;
`;

const Title = styled.div`
  flex: 4;
  color: #ffef5b;
  padding: 8px 6px;
`;

const VideoCard: React.FC<Video> = ({ title, url }) => {
  return (
    <VideoCardBlock>
      <Body>
        <Frame src={url}></Frame>
        <Title>{title}</Title>
      </Body>
      <Right>
        <RemoveBtn>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveBtn>
      </Right>
    </VideoCardBlock>
  );
};

export default VideoCard;
