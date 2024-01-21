import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SNES';
    src: url('https://www.fontspace.com/snes-font-f26537') format('woff');
    font-weight: normal;
    font-style: normal;
}
/* @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Montserrat&display=swap'); */

body {
background: hsla(221, 51%, 16%, 1);

background: radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);

background: -moz-radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);

background: -webkit-radial-gradient(circle, hsla(221, 51%, 16%, 1) 26%, hsla(0, 0%, 0%, 1) 92%);
/* height: 100vh; */
margin: 0;
padding-bottom: 80px;
font-family: 'Luckiest Guy', cursive;
letter-spacing: 1px;
}
`;