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
  :root{
    --grey-1: #E0DDDD;
    --grey-2: #5F5F65;
    --grey-3: #DCDBDB;
    --grey-4: #EAEAFD;
    --grey-5: #A5A0A0;
    --grey-6: rgba(224, 221, 221, 0.03);
    --color-primary: #181EBE;
    --color-primary-70: rgba(24, 29, 190, 0.7);
    --color-primary-50: rgba(24, 29, 190, 0.5);
    --white: #FFF;


    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-10: 10px;
    --radius-20: 20px;

    --rem-08: 0.8rem;
    --rem-09: 0.9rem;
    --rem-11: 1.1rem;
    --rem-16: 1.6rem;

  }

`;
