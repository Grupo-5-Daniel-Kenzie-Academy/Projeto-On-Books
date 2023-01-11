import styled from "styled-components";

export const Licard = styled.li`
  width: 200px;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 15px;

  border-radius: 8px;
  border: 0.5px solid #d1d5db;

  :hover {
    transition: all 0.5s ease;
    transform: scale(1.1);

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  animation: slideInUp;
  animation-duration: 0.8s;

  background: #ffffff;
`;
