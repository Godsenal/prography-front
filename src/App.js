import React from "react";
import { ThemeProvider } from "styled-components";
import { Body, CardList, Header } from "./containers";

const theme = {
  primary: "#1c6cec",
  secondary: "#fb7da7",
  white: "#fefefe",
  gray: "#eee",
  background: "#26262b"
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Body
          header={`
          Prography-Front 포트폴리오
          `}
          subHeader="Projects"
        >
          <CardList />
        </Body>
      </>
    </ThemeProvider>
  );
}
export default App;
