import { styled } from "styled-components"

export const LoginPageWrapper = styled.div`
    
    @media (max-width: 600px) {
        max-width: 100%;
        background-color: ${props => props.theme.pallete.primary.main};
        width: 600px;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } &h1 {
        margin-bottom: 40px;
    }
`