import styled from "styled-components";
import bgImg from "../../assets/img/livros-hp.png";

export const StyledRegisterPage = styled.main`
  width: 100%;
  height: 100vh;

  padding: 1.5rem;

  background-color: #a15858;

  display: flex;

  @media (min-width: 800px) {
    justify-content: space-around;
    align-items: center;
  }

  .registerContainer {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    height: max-content;
    min-height: 600px;

    background-image: url(${bgImg});
    background-size: cover;

    margin-top: 30px;

    border-radius: 30px;

    @media (min-width: 800px) {
      width: 40%;
      background-color: #d9d9d9;
      background-image: none;
      border-radius: 16px;
      margin-top: 0px;
    }
  }

  .registerImg {
    display: none;

    @media (min-width: 800px) {
      display: flex;
      width: 40%;
      height: 780px;
    }
  }

  .registerForm {
    width: 90%;

    height: max-content;

    background-color: #d9d9d9;

    border-radius: 8px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  button {
    width: 100%;
    max-width: 450px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;

    background-color: #c4d3f1;
    color: #d62424;

    border: 1px solid #d62424;
    border-radius: 4px;

    padding: 0.5rem;
  }

  fieldset {
    width: 100%;
    max-width: 450px;
  }
  input {
    width: 100%;
    max-width: 450px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;
  }
`;
