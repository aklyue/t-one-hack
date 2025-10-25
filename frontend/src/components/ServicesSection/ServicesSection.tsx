import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { services } from "../../constants/services";

const ServicesSection = () => {
  return (
    <Box
      id="services"
      sx={{
        py: 10,
        background: "linear-gradient(to bottom, #f9fafa, #ffffff)",
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
          Сервисы
        </Typography>

        {services.map((service) => (
          <Accordion
            key={service.title}
            sx={{
              mb: 1,
              borderRadius: 2,
              bgcolor: "rgba(0,0,0,0)",
              boxShadow: "none",
              "&:before": {
                background: "linear-gradient(to right, #19d1b880, transparent)",
                height: "1.3px",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#00a18cff",
                  }}
                />
              }
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {service.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
                {service.desc}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default ServicesSection;
