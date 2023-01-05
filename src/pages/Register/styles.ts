import styled from "styled-components";
import bgImg from "../../assets/img/livros-hp.png";

export const StyledRegisterPage = styled.main`
  width: 100%;

  min-height: 90vh;

  padding: 2rem;

  background-color: var(--grey-3);

  display: flex;

  @media (min-width: 800px) {
    justify-content: center;
    gap: 50px;
  }

  p{
    padding: 5px 0;
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
      background-color: var(--grey-3);
      background-image: none;
      border-radius: 16px;
      margin-top: 0px;

      min-height: 0px;
    }
  }

  .registerImg {
    display: none;

    @media (min-width: 800px) {
      display: flex;
      width: 40%;
      height: 500px;

      margin-top: 60px;
    }
  }

  .registerForm {
    width: 90%;
    max-width: 350px;

    height: max-content;

    background-color: var(--white);

    border-radius: 8px;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      margin-top: 15px;
    }
  }

  @media(width > 700px){
    .registerForm{
      padding: 0 30px;
    }
  }

  button {
    width: 100%;
    height: 40px;

    font-size: var(--rem-11);
    font-weight: 500;

    margin-top: 15px;
    margin-bottom: 15px;

    background-color: var(--color-primary);
    color: var(--white);

    border-radius: var(--radius-4);

  }

  fieldset {
    width: 100%;
    max-width: 450px;
  }
  input {
    width: 100%;
    max-width: 450px;

  }

  
`;
