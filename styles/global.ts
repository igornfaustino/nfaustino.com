import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow: initial !important;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor}
  }

  * {
    box-sizing: border-box;
  }
`;
