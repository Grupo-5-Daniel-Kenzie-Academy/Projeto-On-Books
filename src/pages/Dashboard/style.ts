import styled from "styled-components";
export const StyleMain = styled.main`
  min-height: 100vh;

  .sectonBook {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyleHeader = styled.header`
  width: 100%;
  min-height: 3.75rem;
  padding: 0 1.5rem 0 1.5rem;
  background-color: #e0dddd;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 21.875rem) {
    flex-wrap: wrap;
    padding: 0.625rem 1.5rem 0.625rem 1.5rem;
    justify-content: center;
    gap: 0.9375rem;
  }
  div {
    display: flex;
    gap: 0.9375rem;
    align-items: center;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
    }

    img {
      width: 1.875rem;
      height: 1.875rem;
    }
    .foto {
      border-radius: 50%;
    }
  }
`;
export const StyleSectionPesq = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 30px;
  padding-top: 50px;

  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 949px) {
    flex-direction: column-reverse;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;

    gap: 15px;
    h4 {
      font-weight: 400;
      font-size: 20px;
      line-height: 17px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      overflow: auto;
      padding: 15px 5px;

      //Se não gostarem descomentem 
      grid-template-columns: repeat(9, 2fr);
      display: grid;
      @media (max-width: 515px) {
        flex-wrap: nowrap;
        overflow-y: scroll;
      }

      button {
        min-width: 110px;
        height: 26px;
        border-radius: 10px;

        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        background: #8099da;
        color: var(--white);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        :hover {
          background: #8066da;
        }
      }
    }
  }

  .divPesquisa {
    width: 100%;
    max-width: 400px;
    height: 30px;
    background: #8099da;
    position: relative;
    border-radius: 8px;
    margin-bottom: 100px;

    @media (max-width: 949px) {
      margin-bottom: 0px;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
      padding-left: 15px;

      background-color: #8099da;
    }

    input::placeholder {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #e9e9e9;
    }

    img {
      width: 15px;
      height: 15px;
      right: 7px;
      top: 7px;
      position: absolute;

      cursor: pointer;
    }
  }
`;
