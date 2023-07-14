import { styled } from "styled-components";

export const StyledContainer = styled.div`

    @media (max-width: 600px) {

    }

`

export const LoginContainer = styled(StyledContainer)`

    @media (max-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }

`