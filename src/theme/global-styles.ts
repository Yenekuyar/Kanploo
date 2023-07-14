import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
        background-color: ${props => props.theme.pallete.primary.text};
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }

    .App {
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
        @import url('https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@100;400;700&display=swap');;
    }
`;