import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 24px 0 24px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  box-shadow: rgb(99 99 99 / 20%) 2px 4px 5px 0px;
  display: flex;

  @media (max-width: 250px) {
    flex-wrap: wrap;
    padding: 10px 24px 10px 24px;
    justify-content: center;
    gap: 15px;

  }
  div {
    display: flex;
    gap: 12px;
  }
`;
