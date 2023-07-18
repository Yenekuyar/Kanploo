import { LoginInputWrapper } from "./components/LoginInput/login-input.styles";
import { LoginPageWrapper } from "./login-page.styles";
import { StyledLoginLabel } from "./components/LoginLabel/login-label.styles";
import { StyledButton } from "../../Atoms/Button/button.styles";

import { handleLoginSubmit } from './login-page.controller'

export default function LoginPage() {
    return (
            <LoginPageWrapper>
                <h1>Kanploo</h1>

                <form onSubmit={handleLoginSubmit}>
                    <LoginInputWrapper
                        type="text"
                        placeholder="Enter E-mail"
                        id="login-email_input"
                    />
                    <LoginInputWrapper
                        type="password"
                        placeholder="Enter Password"
                        id="login-password_input"
                    />
                    <StyledButton
                        type="submit"
                    >
                        Login
                    </StyledButton>
                </form>

            </LoginPageWrapper>
    )
}