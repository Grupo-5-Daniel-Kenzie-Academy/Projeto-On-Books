import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
    margin:0;
    padding: 0;
    outline:0;
  }
  button{
    cursor: pointer;
    border: none;
    }
  a{
    color: #000000;
    text-decoration: none;
  }
  ul, ol, li{
    list-style: none;
  }
  img{
    max-width: 100%;
  }
  input:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
  


`;
