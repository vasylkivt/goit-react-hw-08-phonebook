import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.webp';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover; 
  background-color: #575757;;

  min-height: 100vh;
  margin: 0;

  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
