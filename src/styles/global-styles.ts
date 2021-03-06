import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;
    }
    html,
    body {
        min-height: 100vh;
    }
    a {
        color:black;
        text-decoration: none;
    }
`;

export default GlobalStyle;
