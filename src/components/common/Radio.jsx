import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const SimpleRadio = ({ labels = [], value = "", handleChange }) => {
  return (
    <RadioGroup row name="radio-group" value={value} onChange={handleChange}>
      {labels.map((label) => (
        <FormControlLabel
          value={label.value}
          control={<Radio />}
          label={label.label}
        />
      ))}
    </RadioGroup>
  );
};
export default SimpleRadio;
