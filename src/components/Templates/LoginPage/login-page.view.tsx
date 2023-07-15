import { LoginInputWrapper } from "./components/LoginContainer/components/LoginInput/login-input.styles";
import { StyledButton } from "../../Atoms/Button/Button.style";
import { LoginPageWrapper } from "./login-page.styles";
import { Container } from "@mui/material";
import { StyledLoginLabel } from "./components/LoginContainer/components/LoginLabel/login-label.styles";

export default function LoginPage() {
    return (
            <LoginPageWrapper>
                <h1>Kanploo</h1>

                <Container>
                    <StyledLoginLabel>E-mail</StyledLoginLabel>
                    <LoginInputWrapper
                        type="text"
                        placeholder="Enter E-mail"
                        id="email_input"
                    />

                    <StyledLoginLabel>Password</StyledLoginLabel>
                    <LoginInputWrapper
                        type="password"
                        placeholder="Enter Password"
                        id="login-password_input"
                    />
                </Container>
    
                <StyledButton
                    type="submit"
                >
                    Login
                </StyledButton>

            </LoginPageWrapper>
    )
}