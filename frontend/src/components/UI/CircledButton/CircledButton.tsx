import { Button, darken } from "@mui/material";
import React from "react";

interface CircledButtonProps {
  text: string;
  widthProp?: number;
  heightProp?: number;
  handleClick: () => void;
  colorProp?: string;
  isOutlined?: boolean;
}

function CircledButton({
  text,
  widthProp,
  heightProp,
  handleClick,
  colorProp,
  isOutlined,
}: CircledButtonProps) {
  return (
    <Button
      onClick={handleClick}
      sx={{
        width: widthProp,
        height: heightProp,
        borderRadius: "6px",
        px: 3,
        py: 1.5,
        color: isOutlined ? colorProp : "white",
        border: `1px solid ${darken(colorProp!, 0.2)}`,
        bgcolor: isOutlined ? "rgba(0,0,0,0)" : colorProp,
        transition: "all 0.1s ease-out",
        "&:hover": {
          bgcolor: isOutlined ? colorProp : undefined,
          opacity: isOutlined ? undefined : "0.8",
          color: "rgba(255, 255, 255, 1)",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default CircledButton;
