import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "(1.21kreviews)",
  1: "(2.0kreviews)",
  1.5: "(2.21kreviews)",
  2: "(3.0kreviews)",
  2.5: "(3.21kreviews)",
  3: "(4.0kreviews)",
  3.5: "(4.21kreviews)",
  4: "(5.0kreviews)",
  4.5: "(5.21kreviews)",
  5: "(6.0kreviews)",
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 400,
        display: "flex",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="30px" />}
        style={{ fontSize: "40px" }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
