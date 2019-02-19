import React, { useMemo } from "react";
import styled from "styled-components";
import { Card } from "../components";
import projects from "../projects";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CardList = () => {
  const [main, sub] = useMemo(() => {
    const withDemo = [];
    const withoutDemo = [];
    projects.forEach(project =>
      project.demo ? withDemo.push(project) : withoutDemo.push(project)
    );
    return [withDemo, withoutDemo];
  }, []);
  return (
    <Container>
      {main.map(project => (
        <Card key={project.title} {...project} width={"100%"} />
      ))}
      {sub.map(project => (
        <Card key={project.title} {...project} />
      ))}
    </Container>
  );
};

export default CardList;
