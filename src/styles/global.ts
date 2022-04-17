import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .App {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  }
`;