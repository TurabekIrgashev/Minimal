import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          sx={{ borderRadius: "12px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          color="success"
          variant="outlined"
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={8.5}>8.5</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={9.5}>9.5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={10.5}>10.5</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={11.5}>11.5</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
