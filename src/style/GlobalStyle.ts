import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
      min-height: 100vh;
      height: 50%;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: ${({ theme }) => theme.colors.backgroundGradient};
      color: ${({ theme }) => theme.colors.text};
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;