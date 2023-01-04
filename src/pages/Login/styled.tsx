import styled from "styled-components";
import logo from "../../assets/img/livros.svg"

export const SlyledDiv = styled.div`
  .divForm {
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    background-color: #fa3503;
  }

  .divBackground {
    width: 90%;
    margin: 0 auto;
    height: max-content;
    padding: 32px 15px;
    background-color: red;
    background-image: url();
    background-size: cover;
    max-width: 650px;
  }

  .image{
    display: none;
  }

  h1 {
    padding: 13px 0px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
  }

  .input {
    width: 80%;
    margin: 0 auto;
    max-width: 350px;
  }

  .button {
    width: 80%;
    margin: 10px auto;
    height: 45px;
    border-radius: 8px;
    background: aliceblue;
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 350px;
  }

  span {
  }

  @media (min-width: 700px) {
    .divBackground {
      padding: 0;
      background-color: #d60000;
      width: 45%;
      border-radius: 12px;
      margin: 0px;
      max-width: 450px;
    }

    .divForm {
      width: 100%;
      border-radius: 12px;
    }

    .image {
      width: 45%;
      height: 300px;
      max-width: 450px;
      display: flex;
    }

    .flex {
      display: flex;
      margin-top: 30px;
      width: 80%;
      margin: 35px auto 0px;
      justify-content: space-between;
    }
  }
`;
