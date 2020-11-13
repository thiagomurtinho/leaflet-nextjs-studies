import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    z-index: 0;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    color: '#fff'
  }
`;
