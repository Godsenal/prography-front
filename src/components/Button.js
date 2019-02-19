import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width || "150px"};

  cursor: pointer;
  color: ${props => props.theme.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 5px;
  background-color: ${props =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  box-sizing: border-box;
  padding: 20px 10px;

  opacity: 1;
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.1s;
  }
`;

export default Button;
