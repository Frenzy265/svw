import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
  }


:root {
--primary-color: #004824; //dark green
--secondary-color: #00FF00; // light green
--tertiary-color: #fff; // white
--quaternary-color: #76787B; // grey
--font-family: 'Istok Web', sans-serif;
--default-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16)
}

#root {
    height: 100%
}

html {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    width: 100%;
    background: var(--primary-color);
    font-family: var(--font-family)

}

input, button, li {
    font-size: 16px;
    padding: 0px
}

`;

export default GlobalStyle;
