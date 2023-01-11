import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 80px 0 80px;
  background: var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1020px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
  img {
    width: 100%;
    max-width: 257px;
    height: 48px;
  }
  .foto {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .infUser {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1020px) {
      width: 100%;
      max-width: 436.5px;
      justify-content: space-evenly;
      gap: 30px;
    }
  }
  .logout {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  a {
    :hover {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }
`;
export const StyleMain = styled.main`
  min-height: 100vh;

  display: flex;

  gap: 100px;
  padding-top: 100px;

  .asideProfile {
    width: 200px;
    height: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 150px;

    @media (max-width: 500px) {
      max-height: 100px;
      width: 100%;
      position: relative;
      margin-left: 0px;
    }
    img {
      border-radius: 100%;
    }

    .divUserInfo {
      width: 299px;
      height: 152px;
      box-sizing: border-box;
      background: var(--gray-1);
      border: 1px solid var(--gray-3);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
  .ListaUls {
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    max-width: 1000px;
  }
  ul {
    display: flex;
    gap: 20px;
    height: 300px;
    max-width: 1000px;
    width: 100%;
    background-color: var(--gray-1);
    border-radius: 8px;
    align-items: center;
    padding: 1rem;

    .imgBook {
      width: 110px;
      height: 150px;
    }
  }
`;
