import React from "react";
import { Toolbar, Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { sections } from "../../../constants/sections";
import useHeader from "../../../hooks/useHeader";
import { useLocation, useNavigate } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const MotionAppBar = motion(Box);

const Header = () => {
  const { controls, handleClick } = useHeader();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <MotionAppBar
      position="fixed"
      sx={{ width: "100%", top: 0, left: 0, zIndex: 1200 }}
      animate={controls}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          component={motion.div}
          animate={{
            color: "#00BFA5",
            transition: { duration: 0.1 },
          }}
          onClick={() => navigate("/")}
        >
          <AutoAwesomeIcon />
        </IconButton>

        {location.pathname === "/" && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {sections.map((s) => (
              <Typography
                key={s.id}
                component={motion.div}
                animate={{
                  color: "#00BFA5",
                  transition: { duration: 0.1 },
                }}
                onClick={() => handleClick(s.id)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {s.label}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </MotionAppBar>
  );
};

export default Header;
