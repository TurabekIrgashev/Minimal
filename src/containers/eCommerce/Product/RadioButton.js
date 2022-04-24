import * as React from "react";
import Radio from "@mui/material/Radio";
import { Box } from "@mui/material";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
        color="success"
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
        color="default"
      />
    </Box>
  );
}
