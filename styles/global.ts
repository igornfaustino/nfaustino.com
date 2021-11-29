import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

  ::-moz-selection { /* Code for Firefox */
    color: ${({ theme }) => theme.colors.backgroundColor};
    background: ${({ theme }) => theme.colors.selection};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.backgroundColor};
    background: ${({ theme }) => theme.colors.selection};
  }
`;
