import React from "react";
import "./App.css";
import bgImg from "./img/motion_background.png";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import AddBtn from "components/header/AddBtn";

const AppBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: cover;
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
  width: 768px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBG>
        <Header>
          <h1>MOTION</h1>
          <Btns>
            <AddBtn name="IMAGE" />
            <AddBtn name="VIDEO" />
            <AddBtn name="NOTE" />
            <AddBtn name="TASK" />
          </Btns>
        </Header>
        <Section></Section>
      </AppBG>
    </ThemeProvider>
  );
}

export default App;
