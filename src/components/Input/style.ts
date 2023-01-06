import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--rem-11);
    margin-bottom: 6px;
  }

  input::placeholder{
    color: var(--color-primary-50);
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding-left: 12px;

  background: var(--grey-4);
  border: 1px solid var(--grey-3);
  border-radius: var(--radius-4);

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--rem-09);

  margin-bottom: 6px;

`;
