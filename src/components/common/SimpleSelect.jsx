import styled from "@emotion/styled";
import { FormControl, MenuItem, Select, Tooltip } from "@mui/material";
import React, { useState } from "react";

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SelectInputLabel = styled.p``;

const SimpleSelect = ({ value = "noeviction", handleChange, labels }) => {
  const [tootip, setTooltip] = useState("");
  const handleMouseOver = (info) => {
    setTooltip(info);
  };

  return (
    <SelectWrapper>
      <SelectInputLabel>eviction policy</SelectInputLabel>
      <Tooltip title={tootip} placement="right-start">
        <FormControl fullWidth>
          <Select
            id="policy-select"
            value={value}
            onChange={handleChange}
            size="small"
          >
            {labels.map(({ label, info }) => (
              <MenuItem value={label} onMouseOver={() => handleMouseOver(info)}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </SelectWrapper>
  );
};

export default SimpleSelect;
