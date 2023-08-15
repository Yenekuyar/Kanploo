import { styled } from "styled-components";
import { StyledTitle } from "../../../../components/Atoms/Title/title.styles";

export const LoginTitle = styled(StyledTitle)`
  @media (max-width: 600px) {
    margin-bottom: 120px;
  }

  @media (max-width: 300px) {
    margin-bottom: 24px;
  }
`;
