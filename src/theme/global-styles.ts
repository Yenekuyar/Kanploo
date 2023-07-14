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
    }
`;