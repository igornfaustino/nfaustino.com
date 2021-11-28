import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Code, monospace;
    overflow: initial !important;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor}
  }
  
  * {
    box-sizing: border-box;
  }
`;
