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
  border: 0.5px solid var(--gray-3);

  background-color: var(--white);

  button {
    background-color: var(--white);
  }
`;
