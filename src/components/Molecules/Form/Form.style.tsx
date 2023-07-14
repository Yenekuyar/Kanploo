import styled from 'styled-components'

export const StyledForm = styled.form`
    background-color: ${props => props.theme.pallete.primary.main};
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px, rgba(0, 0, 0, 0.12) 0px 1px 10px, rgba(0, 0, 0, 0.2) 0px 2px 4px;
`;

export const LoginForm = styled(StyledForm)`
    
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        border-radius: 8px;
        flex-direction: column;
        justify-content: center;
        padding: 36px;
        height: 100%;
    }

`
