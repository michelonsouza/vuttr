import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import metrics from './metrics';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    transition: background 200ms, background-color 200ms, color 200ms, border-color 200ms ease !important;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
  }

  body, input, textarea, button {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 26px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.colors.ink}
  }

  h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 50px;
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
  }

  h3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }

  h4 {
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }

  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  .home__button-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${metrics.margin}px;

    button:first-child {
    margin-right: ${metrics.margin / 2}px;
    }
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .question {
    color: ${(props) => props.theme.colors.ink};
  }

  .w-100 {
    width: 100%;
  }
`;
