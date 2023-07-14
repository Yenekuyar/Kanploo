import { LoginInputWrapper } from "./LoginInput/login-input.styles";
import { StyledButton } from "../../Atoms/Button/Button.style";
import { LoginLabelWrapper } from "./LoginLabel/login-label.styles";

export default function LoginPage() {
    return (
            <div>
                <h1>Kanploo</h1>

                <div>
                    <LoginLabelWrapper><b>E-mail</b></LoginLabelWrapper>
                    <LoginInputWrapper
                        type="text"
                        placeholder="Enter E-mail"
                        id="email_input"
                    />

                    <LoginLabelWrapper><b>Password</b></LoginLabelWrapper>
                    <LoginInputWrapper
                        type="password"
                        placeholder="Enter Password"
                        id="login-password_input"
                    />
                </div>
    
                <StyledButton
                    type="submit"
                >
                    Login
                </StyledButton>

            </div>
    )
}