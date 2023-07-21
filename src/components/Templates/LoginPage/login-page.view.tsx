import { LoginInputWrapper } from "./components/LoginInput/login-input.styles";
import { LoginPageWrapper } from "./login-page.styles";
import { StyledButton } from "../../Atoms/Button/button.styles";
import { LoginTitle } from "./components/LoginTitle/login-title.styles";
import { IProps } from "./login-page.props";


import { useState } from "react";


export default function LoginPage(props: IProps) {

    return (
            <LoginPageWrapper>
                <LoginTitle>Kanploo</LoginTitle>
                <form onSubmit={props.handleLoginSubmit}>
                    <LoginInputWrapper
                        type="text"
                        placeholder="Enter E-mail"
                        id="login-email_input"
                        onChange={props.handleEmailChange}
                    />
                    <LoginInputWrapper
                        type="password"
                        placeholder="Enter Password"
                        id="login-password_input"
                        onChange={props.handlePasswordChange}
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