import { LoginInputWrapper } from "./components/LoginInput/login-input.styles";
import { LoginPageWrapper } from "./login-page.styles";
import { StyledButton } from "../../components/Atoms/Button/button.styles";
import { LoginTitle } from "./components/LoginTitle/login-title.styles";
import { IProps } from "./login-page.props";

export default function LoginPage(props: IProps) {
  return (
    <LoginPageWrapper>
      <div className="login-page">
        <form className="login-form" onSubmit={props.handleLoginSubmit}>
          <LoginTitle>Kanploo</LoginTitle>
          {}
          <LoginInputWrapper
            type="text"
            placeholder="Enter E-mail"
            id="login-email_input"
            onChange={props.handleEmailChange}
            required={true}
          />
          <LoginInputWrapper
            type="password"
            placeholder="Enter Password"
            id="login-password_input"
            onChange={props.handlePasswordChange}
            required={true}
          />
          <StyledButton type="submit">Login</StyledButton>
        </form>
      </div>
    </LoginPageWrapper>
  );
}
