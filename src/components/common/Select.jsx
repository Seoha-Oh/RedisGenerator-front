import styled from "@emotion/styled";
import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SimpleSelect = ({ value, handleChange, labels }) => {
  return (
    <SelectWrapper>
      <InputLabel id="policy-label"> eviction policy </InputLabel>
      <Select
        labelId="policy-label"
        id="policy"
        value={value}
        onChange={handleChange}
        label="noeviction"
        size="small"
      >
        {labels.map(({ label }) => (
          <MenuItem value={label}>{label}</MenuItem>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default SimpleSelect;
