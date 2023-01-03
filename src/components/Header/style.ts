import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 24px 0 24px;
  background-color: #e0dddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
