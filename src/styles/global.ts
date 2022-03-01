import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0 !important;
    font-family: Fira Code, monospace;
    overflow: initial !important;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
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

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.textColor} ${({ theme }) =>
	theme.colors.backgroundColor};
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundColor};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.textColor};
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.backgroundColor};
  }
`;
