import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="start"
      sx={{
        py: 12,
        bgcolor: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
          Готовы начать?
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#6B7280", mb: 6, maxWidth: 600, mx: "auto" }}
        >
          Начните создавать уникальные AI-фоны для вашей вебкамеры всего за
          несколько секунд. Используйте фото, видео или текстовые промпты и
          удивляйте своих коллег и друзей.
        </Typography>
        <Button
          sx={{
            bgcolor: "#00BFA5",
            color: "#FFFFFF",
            px: 5,
            py: 1.5,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#10D9B4",
            },
          }}
          onClick={() => navigate("/generate")}
        >
          Приступить к работе
        </Button>
      </Container>
    </Box>
  );
};

export default StartSection;
