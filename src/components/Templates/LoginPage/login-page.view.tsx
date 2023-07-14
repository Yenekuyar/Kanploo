import { StyledInput } from "../../Atoms/Input/Input.style"
import { StyledButton } from "../../Atoms/Button/Button.style"
import { LoginForm } from "../../Molecules/Form/Form.style"
import { LoginLabel } from "../../Atoms/Label/Label.style"
import { LoginContainer } from "../../Molecules/Container/Container.style"

export default function LoginPage() {
    return (
            <LoginForm>
                <h1>Kanploo</h1>

                <LoginContainer>
                    <LoginLabel><b>E-mail</b></LoginLabel>
                    <StyledInput
                        type="text"
                        placeholder="Enter E-mail"
                        id="email_input"
                    />

                    <LoginLabel><b>Password</b></LoginLabel>
                    <StyledInput
                        type="text"
                        placeholder="Enter Password"
                        id="password_input"
                    />
                </LoginContainer>
    
                <StyledButton
                    type="submit"
                >
                    Login
                </StyledButton>

            </LoginForm>
    )
}