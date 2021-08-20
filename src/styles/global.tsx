import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    html {
        height: 100%;
        width: 100%;
        &, * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%; 
    }

    body {
        background: #f9f9f9;
        height: 100%;
        &, button, input {
            color: #590FB7;
            font: 1rem/1.2 'Montserrat Alternates', sans-serif;
        }

        button {
            cursor: pointer;
        }

        button, input {
                background-color: transparent;
                border: 0;
                outline: 0;
            }
    }
`;

export default GlobalStyle;
