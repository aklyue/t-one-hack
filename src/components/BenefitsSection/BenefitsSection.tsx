import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { benefitsIcons } from "../../constants/benefitsIcons";
import Divider from "../UI/Divider";

const BenefitsSection = () => {
  return (
    <Box
      id="benefits"
      sx={{
        pt: 12,
        background: "linear-gradient(to bottom, #ffffff, #f9fafa)",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 8,
          }}
        >
          Преимущества
        </Typography>

        <Grid
          container
          spacing={6}
          sx={{
            pb: 4,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {benefitsIcons.map((item) => (
            <Box
              key={item.title}
              sx={{
                textAlign: "center",
                p: 4,
                borderRadius: 4,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
                },
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: "#111827" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Divider />
      </Container>
    </Box>
  );
};

export default BenefitsSection;
