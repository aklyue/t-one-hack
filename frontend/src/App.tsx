import { Box } from "@mui/material";
import React from "react";
import Router from "./Router";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";

function App() {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
