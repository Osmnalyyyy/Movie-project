import styled, { css } from "styled-components";
export const Div = styled.div`
  /* This renders the buttons above... Edit me! */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 2rem;

  cursor: pointer;
  border: 2px solid gray;
  &:hover {
    transform: scale(1.15);
  }
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  /*  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
      border: 2px solid red;
      text-align: center;
      cursor: pointer;
    `}*/
`;
export default Div;
