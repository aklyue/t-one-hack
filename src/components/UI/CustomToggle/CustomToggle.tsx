import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 5,
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#434343ff",
        opacity: 1,
      },
      "& + .MuiSwitch-track::before": {
        opacity: 1,
      },
      "& + .MuiSwitch-track::after": {
        opacity: 0,
      },
    },
  },
  "& .MuiSwitch-input": {
    width: "600% !important",
    left: "-250% !important",
  },
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 40,
    backgroundColor: "rgba(202, 202, 202, 1)",
    opacity: 1,
    position: "relative",
    transition: "background-color 0.3s",
    "&::before, &::after": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
      transition: "opacity 0.3s",
    },
  },
}));

interface CustomToggleProps {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onChange: (checked: boolean) => void;
}

const CustomToggle = ({
  leftLabel,
  rightLabel,
  value,
  onChange,
}: CustomToggleProps) => {
  return (
    <Box
      sx={{
        width: "60px",
      }}
    >
      <StyledSwitch
        checked={value}
        onChange={(e) => onChange?.(e.target.checked)}
        inputProps={{ "aria-label": "mask toggle" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{leftLabel}</Typography>
        <Typography>{rightLabel}</Typography>
      </Box>
    </Box>
  );
};

export default CustomToggle;
