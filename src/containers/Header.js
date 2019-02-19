import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useEventListener } from "../hooks/event";
import { HEADER_HEIGHT } from "../constants/style";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 1rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.background};
  ${props =>
    !props.fullHeader &&
    `
      padding: 0.1rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    `}

  position: fixed;
  transition: padding 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  z-index: 2;

  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 0 1 200px;
  padding-left: 2rem;
`;
const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;
const Right = styled.div`
  flex: 1 1;
  padding-right: 2rem;
`;
const Title = styled.div`
  text-align: right;
`;
const Header = () => {
  const [fullHeader, setFullHeader] = useState(true);
  useEffect(() => {
    setFullHeader(window.pageYOffset < HEADER_HEIGHT);
  }, []);
  useEventListener("scroll", () => {
    if (window.pageYOffset > HEADER_HEIGHT) {
      setFullHeader(false);
    } else {
      setFullHeader(true);
    }
  });
  return (
    <Container fullHeader={fullHeader}>
      <Left>
        <Logo>Lee Taehee</Logo>
      </Left>
      <Right>
        <Title>Prography Portfolio</Title>
      </Right>
    </Container>
  );
};

export default Header;
