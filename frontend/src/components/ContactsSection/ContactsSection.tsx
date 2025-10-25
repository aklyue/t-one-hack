import React from "react";
import { Box, Typography, Container, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => (
  <Container sx={{ py: 10 }} id="contacts">
    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
      Контакты
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
        gap: 4,
      }}
    >
      <Stack direction="column" spacing={3} sx={{ flex: 1 }}>
        <Link
          href="mailto:contact@aibg.com"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#00BFA5",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          <EmailIcon sx={{ mr: 1 }} /> contact@aibg.com
        </Link>

        <Link
          href="https://github.com/aibg-project"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#00BFA5",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          <GitHubIcon sx={{ mr: 1 }} /> GitHub
        </Link>

        <Link
          href="https://t.me/aibg_project"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#00BFA5",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          <TelegramIcon sx={{ mr: 1 }} /> Telegram
        </Link>
      </Stack>

      <Box
        sx={{
          flex: 1,
          textAlign: "justify",
          color: "#6B7280",
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          Мы всегда на связи! Независимо от вашего часового пояса или способа
          связи, вы можете обратиться к нам в любое удобное время.
        </Typography>
        <Typography variant="body1">
          Будь то вопрос по интеграции, предложение о сотрудничестве или
          обратная связь по продукту — мы постараемся ответить максимально
          быстро и подробно.
        </Typography>
      </Box>
    </Box>
  </Container>
);

export default ContactSection;
