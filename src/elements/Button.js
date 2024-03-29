import styled, { css } from "styled-components";
const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  &:hover {
    transform: scale(1.5);
  }
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
      border: 2px solid red;
      text-align: center;
      cursor: pointer;
    `}
`;
export default Button;
