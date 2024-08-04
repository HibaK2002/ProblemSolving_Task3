//Q8 
import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const DropDown = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  
  return (
    <FormControl fullWidth>
      <InputLabel id="dropdown-label">Select Option</InputLabel>
      <Select
        labelId="dropdown-label"
        value={selectedValue}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value="One">One</MenuItem>
        <MenuItem value="Tow">Tow</MenuItem>
        <MenuItem value="Three">Three</MenuItem>
      </Select>
      <p>The Selected Value is {selectedValue}</p>
    </FormControl>
  );
};

export default DropDown;
