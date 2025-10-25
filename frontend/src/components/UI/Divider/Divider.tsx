import { Box, Container } from "@mui/material";

export const Divider = () => (
  <Container>
    <Box
      sx={{
        height: "2px",
        width: "100%",
        background: "linear-gradient(to right, transparent, #00bfa62f, transparent)",
      }}
    />
  </Container>
);
