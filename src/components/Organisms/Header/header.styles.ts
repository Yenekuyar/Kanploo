import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.pallete.primary.main};
  color: ${(props) => props.theme.pallete.primary.text};
  
  .header-container {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 600;
    background-image: linear-gradient(to left, #49029a, #7900ff);
    background-clip: text;
    -webkit-background-clip: text;
    border-bottom: 1px solid #000;
  }
`;
