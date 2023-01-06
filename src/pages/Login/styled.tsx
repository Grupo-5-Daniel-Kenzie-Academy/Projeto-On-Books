import styled from "styled-components";
import logo from "../../assets/img/livros.svg";

export const SlyledDiv = styled.div`

  background-color: var(--grey-3);
  min-height: 100vh;

  .divForm {
    width: 90%;

    margin: 0 auto;
    border-radius: var(--radius-8);

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--white);

    box-shadow: rgb(99 99 99 / 20%) 2px 5px 5px 0px;

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

    font-size: var(--rem-16);
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
  }


  .input {
    width: 80%;
    max-width: 400px;

    margin: 5px auto;
  }

  .button {
    width: 80%;
    height: 45px;
    max-width: 500px;

    margin: 10px auto;
    border-radius: var(--radius-8);
    background: var(--color-primary);
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white);
  }

  .messageRegister{
    font-size: var(--rem-08);

    color: var(--grey-5);
  }

  .registerButton{

    padding: 8px 20px;

    margin: 10px auto;
    border-radius: var(--radius-8);

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-primary);
    text-decoration: revert;

  }

  .flex {
    margin-top: 40px;
  }

  .error{
    margin: 0 auto;
    display: table
  }

  @media (min-width: 800px) {

    .divBackground {
      padding: 0;
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

    
  }
`;
