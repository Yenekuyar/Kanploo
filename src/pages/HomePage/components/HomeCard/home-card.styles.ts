import { styled } from "styled-components";

export const StyledHomeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 16px;
  background-color: ${(props) => props.theme.pallete.primary.main};
  width: 180px;
  height: 180px;
  border-radius: 12px;
  color: ${(props) => props.theme.pallete.primary.text};
  box-shadow: inset 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;
