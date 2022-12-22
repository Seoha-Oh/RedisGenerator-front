import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SelectInputLabel = styled.p``;

const SimpleSelect = ({ value, handleChange, labels }) => {
  return (
    <SelectWrapper>
      <SelectInputLabel>eviction policy </SelectInputLabel>
      <FormControl fullWidth>
        <InputLabel id="policy-label">eviction policy</InputLabel>
        <Select
          labelId="policy-label"
          id="policy"
          value={value}
          onChange={handleChange}
          label=" eviction policy "
          size="small"
        >
          {labels.map(({ label }) => (
            <MenuItem value={label}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectWrapper>
  );
};

export default SimpleSelect;
