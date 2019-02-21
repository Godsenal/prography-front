import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Card } from "../components";
import projects from "../projects";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Helper = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50px;
  color: white;
  background-color: ${props => props.theme.secondary};
`;
const HelperDoc = styled.div`
  transform: ${props => `translateY(${props.show ? 0 : 100}px)`};
  opacity: ${props => (props.show ? 1 : 0)};
  position: fixed;
  bottom: 100px;
  right: 20px;

  width: 150px;
  padding: 20px;
  border-radius: 10px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  transition: transform 0.2s, opacity 0.2s;
`;
const DocLink = styled.a`
  display: block;
  word-break: break-all;
  margin: 10px 0;
`;
const CardList = () => {
  const [mountHelper, setMountHelper] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const [main, sub] = useMemo(() => {
    const withDemo = [];
    const withoutDemo = [];
    projects.forEach(project =>
      project.demo ? withDemo.push(project) : withoutDemo.push(project)
    );
    return [withDemo, withoutDemo];
  }, []);

  const handleToggleHelper = () => {
    if (!showHelper) {
      setShowHelper(true);
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => setMountHelper(true))
      );
    } else {
      setMountHelper(false);
    }
  };
  const handleHelperTransition = () => {
    if (!mountHelper) {
      setShowHelper(false);
    }
  };
  return (
    <Container>
      {main.map(project => (
        <Card key={project.title} {...project} width={"100%"} />
      ))}
      {sub.map(project => (
        <Card key={project.title} {...project} />
      ))}
      {showHelper && (
        <HelperDoc show={mountHelper} onTransitionEnd={handleHelperTransition}>
          {main.map(({ title }) => {
            return (
              <DocLink
                key={title}
                href={`#${title}`}
                onClick={handleToggleHelper}
              >
                {title}
              </DocLink>
            );
          })}
          {sub.map(({ title }) => {
            return (
              <DocLink
                key={title}
                href={`#${title}`}
                onClick={handleToggleHelper}
              >
                {title}
              </DocLink>
            );
          })}
        </HelperDoc>
      )}
      <Helper onClick={handleToggleHelper}>?</Helper>
    </Container>
  );
};

export default CardList;
