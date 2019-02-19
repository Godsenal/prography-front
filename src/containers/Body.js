import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../constants/style";
import media from "../styles/media";

const Container = styled.div`
  margin: auto;
  padding: ${HEADER_HEIGHT + 20}px 0;
  width: 60%;
  ${media.tablet`width: 90%;`}
  word-break: keep-all;
`;
const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  text-align: center;
  line-height: 1.8;

  min-height: 150px;
  margin: 100px 0;
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
`;
const SubHeader = styled.h1`
  font-size: 28px;
  margin: 2rem 0;
  text-align: center;
`;
const Main = styled.div`
  width: 100%;
`;
const Body = ({ children, header, subHeader }) => (
  <Container>
    {header && <Header>{header}</Header>}
    {subHeader && <SubHeader>{subHeader}</SubHeader>}
    <Main>{children}</Main>
  </Container>
);
export default Body;
