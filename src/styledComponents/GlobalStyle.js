import { createGlobalStyle } from 'styled-components';
import { colors } from './styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 1.2rem;
    color: ${colors.dark};
    line-height: 1.5;
  }

  body, html, #app {
    height: 100%;
    margin: 0;
  }
`;

export default GlobalStyle;
