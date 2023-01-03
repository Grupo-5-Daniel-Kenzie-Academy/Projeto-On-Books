import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 235px;
  height: 34px;
  padding-left: 12px;

  background: #c4d3f1;
  border: 1px solid #d62424;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(193, 48, 48, 0.5);
`;
