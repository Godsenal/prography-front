import React, { useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../hooks/event";
import { HEADER_HEIGHT } from "../constants/style";

const Container = styled.div`
  background-color: tomato;

  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: ${props => (props.fullHeader ? "0.3rem" : "1rem")};

  position: fixed;
  transition: padding 0.1s ease-in-out;
`;

const Header = () => {
  const [fullHeader, setFullHeader] = useState(
    window.pageYOffset > HEADER_HEIGHT
  );
  useEventListener("scroll", () => {
    if (window.pageYOffset > HEADER_HEIGHT) {
      setFullHeader(true);
    } else {
      setFullHeader(false);
    }
  });
  return <Container fullHeader={fullHeader}>Hi Header</Container>;
};

export default Header;
