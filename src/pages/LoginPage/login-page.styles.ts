import { styled } from "styled-components";

export const LoginPageWrapper = styled.div`
  @media (max-width: 600px) {
    max-width: 100%;
    background-color: ${(props) => props.theme.pallete.primary.main};
    width: 600px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &h1 {
    margin-bottom: 40px;
  }

  @media (max-width: 3000px) {
    .login-page {
      display: flex;
      justify-content: center;
    }

    .login-form {
      background-color: ${(props) => props.theme.pallete.primary.grey4};
      border: 2px solid ${(props) => props.theme.pallete.primary.dark};
      display: inline-block;
      text-align: center;
      padding: 24px;
      margin-top: 15%;
    }
  }
`;
