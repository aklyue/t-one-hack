import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

import { aboutIcons } from "../../constants/aboutIcons";

const AboutSection = () => (
  <Container sx={{ py: 10 }} id="about">
    <Grid
      sx={{
        display: "grid",
        flexWrap: "wrap",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: { xs: 6, md: 10 },
      }}
    >
      <Grid
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          О сервисе
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#6B7280", mb: 2, lineHeight: 1.7, textAlign: "justify" }}
        >
          Наш сервис — это инновационное решение для персонализации видеосвязи с
          помощью искусственного интеллекта. Мы объединяем мощные AI-модели
          генерации изображений и удобный интерфейс, чтобы вы могли легко
          создавать уникальные фоны для вашей вебкамеры в реальном времени.
          <br />
        </Typography>
      </Grid>

      <Grid
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 4, sm: 6 },
        }}
      >
        {aboutIcons.map((item) => (
          <Box
            key={item.label}
            sx={{
              textAlign: "center",
              width: { xs: "30%", sm: "20%" },
            }}
          >
            {item.icon}
            <Typography variant="body2" sx={{ mt: 1, color: "#6B7280" }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  </Container>
);

export default AboutSection;
