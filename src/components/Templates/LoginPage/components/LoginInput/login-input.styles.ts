import { styled } from "styled-components";

export const LoginInputWrapper = styled.input`
    padding: 24px;
    background-color: ${props => props.theme.pallete.primary.dark};
    color: ${props => props.theme.pallete.primary.text};
    border: none;
    border-radius: 8px;
    width: 90%;
    margin: 4px 0;

    &:active {
        background-color: ${props => props.theme.pallete.primary.dark};
    }
`;