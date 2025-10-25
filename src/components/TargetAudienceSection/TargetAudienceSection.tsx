import React from "react";
import { Box, Typography, Card, Container } from "@mui/material";
import { audienceIcons } from "../../constants/audienceIcons";

const TargetAudienceSection = () => {
  return (
    <Container id="target">
      <Box sx={{ py: 10, bgcolor: "#FFFFFF" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
          Кому подходит проект
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {audienceIcons.map((item) => (
            <Card
              key={item.label}
              sx={{
                flex: "1 1 180px",
                minWidth: 180,
                textAlign: "center",
                p: 4,
                borderRadius: 3,
                boxShadow: "none",
                border: "1px solid #00ebccff",
                transition: "all 0.15s",
                "&:hover": {
                  border: "1px solid #00BFA5",
                },
              }}
            >
              {item.icon}
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
                {item.label}
              </Typography>
            </Card>
          ))}
        </Box>
        <Typography
          variant="h5"
          sx={{ mt: 6, textAlign: "center", fontWeight: 700 }}
        >
          Наш сервис помогает создавать{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #10D9B4, #00BFA5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            уникальные
          </Box>{" "}
          фоны
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: 700, color: "#929292", mt: 1 }}
        >
          Независимо от профессии
        </Typography>
      </Box>
    </Container>
  );
};

export default TargetAudienceSection;
