import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
background: hsla(221, 51%, 16%, 1);

background: radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);

background: -moz-radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);

background: -webkit-radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);
height: 100vh;
margin: 0;
padding: 0;
}
`;