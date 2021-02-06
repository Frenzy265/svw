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
}

#root {
    height: 100%
}

html {
    width: 100%;
    height: 100%;
    background: var(----primary-color);
}

body {
    margin: 0;
    width: 100%;

}

input, button, li {
    font-size: 16px;
    padding: 0px
}

`;

export default GlobalStyle;
