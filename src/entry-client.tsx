import darkTheme from '@constants/styles/colors';
import color, { createCssVars } from '@utils/styles/stylesUtils';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  :root {
    ${createCssVars(darkTheme)};
    background-color: ${color('neutral.background')};
    color: ${color('primary.text')};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
