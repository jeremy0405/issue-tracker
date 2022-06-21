import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #F7F7FC;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
