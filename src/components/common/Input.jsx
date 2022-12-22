import React from "react";
import { Input, InputLabel } from "@mui/material";
import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SimpleInput = ({ label = "", type = "text", onChange }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input type={type} onChange={onChange} />
    </InputWrapper>
  );
};
export default SimpleInput;
