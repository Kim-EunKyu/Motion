import React, { useCallback, useState } from "react";
import "./App.css";
import bgImg from "./img/motion_background.png";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import AddBtn from "components/header/AddBtn";
import VideoCard from "components/section/card/VideoCard";
import ImageCard from "components/section/card/ImageCard";
import NoteCard from "components/section/card/NoteCard";
import TaskCard from "components/section/card/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules";

const AppBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px;
  text-align: center;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Section = styled.section`
  flex: 1;
  width: 768px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 auto;
  overflow: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 12px;
  text-align: center;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  const card = useSelector((state: RootState) => state.card.data);

  return (
    <ThemeProvider theme={theme}>
      <AppBG>
        <Container>
          <Header>
            <h1>MOTION</h1>
            <Btns>
              <AddBtn name="IMAGE" />
              <AddBtn name="VIDEO" />
              <AddBtn name="NOTE" />
              <AddBtn name="TASK" />
            </Btns>
          </Header>
          <Section>
            {card.map((value, index) =>
              value.type === "video" ? (
                <VideoCard
                  no={value.no}
                  title={value.title}
                  url={value.body}
                  key={index}
                ></VideoCard>
              ) : value.type === "image" ? (
                <ImageCard
                  no={value.no}
                  title={value.title}
                  url={value.body}
                  key={index}
                ></ImageCard>
              ) : value.type === "note" ? (
                <NoteCard
                  no={value.no}
                  title={value.title}
                  body={value.body}
                  key={index}
                ></NoteCard>
              ) : (
                <TaskCard
                  no={value.no}
                  title={value.title}
                  body={value.body}
                  key={index}
                ></TaskCard>
              )
            )}
          </Section>
          <Footer>Welcome to Motion!</Footer>
        </Container>
      </AppBG>
    </ThemeProvider>
  );
}

export default App;
