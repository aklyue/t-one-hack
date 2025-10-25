import { createTheme } from "@mui/material";
import { commonTypography } from "./constants/typography";

export const getTheme = () =>
  createTheme({
    typography: commonTypography,
  });
