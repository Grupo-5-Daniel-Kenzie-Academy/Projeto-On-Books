import styled from "styled-components";
import logo from "../../assets/img/livros.svg";

export const SlyledDiv = styled.div`
  .divForm {
    width: 90%;

    margin: 0 auto;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #e9e0e0;
  }

  .divBackground {
    width: 90%;
    height: max-content;
    max-width: 650px;

    margin: 0 auto;
    padding: 32px 15px;
    border-radius: 30px;

    background-image: url(${logo});
    background-size: cover;
  }

  .image {
    display: none;
  }

  h1 {
    padding: 13px 0px;
    color: #edb24c;
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 45px;

    font-size: 16px;
    font-weight: 400;
    border: 2px solid #edb24c;
  }

  label{
    font-size:16px
  }

  .input {
    width: 80%;
    max-width: 400px;

    margin: 5px auto;
  }

  .button {
    width: 80%;
    height: 45px;
    max-width: 400px;

    margin: 10px auto;
    border-radius: 8px;
    background: aliceblue;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex {
    margin-top: 40px;
  }

  .error{
    margin: 0 auto;
    display: table
  }

  @media (min-width: 800px) {
    .flex {

    }

    .divBackground {
      padding: 0;
      background-color: #d60000;
      width: 45%;
      border-radius: 12px;
      margin: 0px 0px 0px 30px;
      max-width: 350px;
    }

    .divForm {
      width: 100%;
      border-radius: 12px;
      padding: 12px;
    }

    .image {
      height: 450px;
      width: 71%;
      max-width: 450px;
      display: flex;
    }

    .flex {
      display: flex;
      margin-top: 30px;
      width: 80%;
      margin: 35px auto 0px;
      align-items: center;
      justify-content: center;
    }

    input{
      max-width: 400px;
    }
  }
`;
