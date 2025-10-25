import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/images/Hero/hero-bg.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#FFFFFF",
        color: "#1F1F1F",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          pt: 17,
          pb: 12,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Добро пожаловать
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#848484" }}>
          Создавайте уникальные фоны для вашей вебкамеры с помощью AI.
          Используйте промпты, фото, гифки или видео.
        </Typography>
        <Button
          onClick={() => navigate("/generate")}
          sx={{
            bgcolor: "#00BFA5",
            border: "1px solid #00aa94ff",
            color: "#FFFFFF",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": { bgcolor: "#10D9B4" },
          }}
        >
          Начать
        </Button>
      </Box>
    </Box>
  );
};
export default HeroSection;
