import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 24px 0 24px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgb(99 99 99 / 20%) 2px 4px 5px 0px;


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
