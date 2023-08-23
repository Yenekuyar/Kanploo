import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  background-color: white;

  width: 100%;
  height: 100%;

  .homecard-title {
    color: ${(props) => props.theme.pallete.primary.main};
    margin: 16px 4px;
  }

  .homecard-container {
    display: flex;
    justify-content: flex-start;
    margin: 16px;
    flex-wrap: wrap;
    height: 100%;
  }
`;
