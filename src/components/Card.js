import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const alignCenter = `
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: inline-block;
  flex-grow: 1;

  width: ${props => props.width || "33%"};
  ${media.desktop`width: ${props => props.width || "50%"};`}
  ${media.tablet`width: ${props => props.width || "100%"};`}
  min-height: ${props => props.height || "400px"};

  margin-top: 1rem;
  padding: 0.5rem 1rem;

  box-sizing: border-box;

  word-break: keep-all;
`;
const Inner = styled.div`
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2rem;

  background-color: ${props => props.theme.white};
  color: ${props => props.theme.background};
`;
const Anchor = styled.a`
  display: block;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 22px;
  margin: 0;
  min-height: 50px;
  ${alignCenter}
`;
const Body = styled.div`
  border-top: 1px solid ${props => props.theme.gray};
  border-bottom: 1px solid ${props => props.theme.gray};

  box-sizing: border-box;
  padding: 5px 0px;
  width: 100%;
  min-height: 300px;

  word-break: break-word;
`;
const Description = styled.p`
  white-space: pre-line;
`;
const Demo = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
const DemoTitle = styled.h1`
  font-size: 18px;
  border-bottom: 1px solid ${props => props.theme.gray};
  margin-bottom: 1rem;
  color: ${props => props.theme.secondary};
`;
const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  word-break: break-all;
`;
const LinkContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`;
const LinkTitle = styled.h1`
  margin-top: 1rem;
  font-size: 18px;
`;
const Link = styled.a``;
const Card = ({
  title,
  body,
  description,
  demo,
  github,
  website,
  ...props
}) => {
  return (
    <Container {...props}>
      <Anchor name={title} role="img" aria-label="document">
        📋
      </Anchor>
      <Inner>
        <Title>{title}</Title>
        <Body>
          <Description>{description}</Description>
          {demo && (
            <Demo>
              <DemoTitle>Simple Demo</DemoTitle>
              {demo}
            </Demo>
          )}
        </Body>
        <Footer>
          <LinkTitle>링크</LinkTitle>
          {website && (
            <LinkContainer>
              Website: <Link href={website}>{website}</Link>
            </LinkContainer>
          )}
          {github && (
            <LinkContainer>
              Github: <Link href={github}>{github}</Link>
            </LinkContainer>
          )}
        </Footer>
      </Inner>
    </Container>
  );
};

export default Card;
