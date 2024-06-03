// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding-top: 80px; /* Altura aproximada del navbar */
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    color: ${({ theme }) => theme.accent};
    margin-left: 10px
  }
  h1 {
    color: ${({ theme }) => theme.accent};
  }
`;

export default GlobalStyles;
