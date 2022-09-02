import { Slider, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setPasswordLength } from "../../../Store/slices/passwordLength/passwordLengthSlice";

export const PasswordGeneratorForm = () => {
  return (
    <form>
      <PasswordLength />
    </form>
  );
};

const PasswordLength = () => {
  const dispatch = useDispatch();
  const passwordLength = useSelector(
    (state) => state.passwordLength.passwordLength
  );

  const marks = [
    {
      value: 8,
      label: "8",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 16,
      label: "16",
    },
    {
      value: 32,
      label: "32",
    },
    {
      value: 64,
      label: "64",
    },
  ];

  function valueText(value) {
    return value;
  }

  return (
    <Box
      sx={{
        minWidth: 300,
        width: "40vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography id="non-linear-slider" gutterBottom>
        Password Length
      </Typography>
      <Slider
        aria-label="Password Length"
        defaultValue={passwordLength}
        onChange={(e) => {
          dispatch(setPasswordLength(parseInt(e.target.value)));
        }}
        getAriaValueText={valueText}
        min={8}
        max={64}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};
