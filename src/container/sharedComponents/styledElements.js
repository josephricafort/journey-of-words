import styled from "styled-components";

const Word = styled.p`
  display: inline-block;
  text-align: left;
  font-family: ${(props) => props.theme.cursive};
  font-size: 28px;
  background-color: ${(props) => props.theme.fill1};
`;

export { Word };
