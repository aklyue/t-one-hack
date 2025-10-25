import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../../constants/possibilities";
import { buttons } from "../../constants/possibilities";

const PossibilitiesSection = () => {
  const [selected, setSelected] = useState<
    "IMAGE" | "GIF/VIDEO" | "AI GENERATE"
  >("IMAGE");

  return (
    <Container id="possibilities">
      <Box sx={{ py: 10, bgcolor: "#FFFFFF" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Возможности
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            color: "#929292",
          }}
        >
          Мы предлагаем{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #10D9B4, #00BFA5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            несколько
          </Box>{" "}
          вариантов генерации фона
        </Typography>

        <Box sx={{ mb: 6, display: "flex", justifyContent: "center", gap: 2 }}>
          {buttons.map((btn) => (
            <Button
              key={btn}
              variant={selected === btn ? "contained" : "outlined"}
              onClick={() => setSelected(btn)}
              sx={{
                px: 3,
                py: 1,
                fontWeight: 600,
                bgcolor: selected === btn ? "#00BFA5" : "transparent",
                color: selected === btn ? "#fff" : "#00BFA5",
                borderColor: "#00BFA5",
                "&:hover": {
                  bgcolor: selected === btn ? "#10D9B4" : "rgba(0,191,165,0.1)",
                },
              }}
            >
              {btn}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              borderRadius: "16px",
              border: "1px solid #00BFA5",
              p: 1,
              pt: 4
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 8,
                display: "flex",
                gap: 1,
                zIndex: 2,
              }}
            >
              {buttons.map((btn) => (
                <Box
                  key={btn}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: selected === btn ? "#00BFA5" : "#E5E7EB",
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </Box>

            <AnimatePresence mode="wait">
              <motion.img
                key={selected}
                src={content[selected]}
                alt={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 10,
                  border: "1px solid #00BFA5",
                }}
              />
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PossibilitiesSection;
