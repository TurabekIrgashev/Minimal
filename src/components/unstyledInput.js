import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 100% !important;
  font-size: .975rem;
  font-weight: 600;
  line-height: 1.5;
  cursor:pointer;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 1px solid ${
      theme.palette.mode === "dark" ? blue[600] : "rgb(0, 171, 8)"
    };
    height:60px;
    border-color:rgb(0, 171, 8);
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const [inputValue, setInputValue] = React.useState(`Add ${props.type}`);

  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onClick={() => setInputValue("")}
      onBlur={() => setInputValue(`Add ${props.type}`)}
    />
  );
});

export default function UnstyledInput({ type }) {
  return (
    <CustomInput
      aria-label="Demo input"
      placeholder="New section"
      type={type}
    />
  );
}
