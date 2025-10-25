import {
  Box,
  TextareaAutosize,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomToggle from "../CustomToggle";
import CircledButton from "../CircledButton";

interface BackgroundSelectionProps {
  selectedBgType: string;
  prompt: string;
  setPrompt: (p: string) => void;
  smoothEdges: boolean;
  setSmoothEdges: (e: boolean) => void;
  mask: boolean;
  setMask: (m: boolean) => void;
}

function BackgroundSelection({
  selectedBgType,
  prompt,
  setPrompt,
  smoothEdges,
  setSmoothEdges,
  mask,
  setMask,
}: BackgroundSelectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      console.log({
        fileName: file.name,
        fileType: file.type,
        fileData: reader.result, // base64
        prompt,
        smoothEdges,
        mask,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box
      sx={{
        mt: 2,
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {selectedBgType === "AI-GENERATE" && (
        <Box>
          <TextareaAutosize

            minRows={4}
            placeholder="Text prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: "100%",
              backgroundColor: "rgba(210, 210, 210, 1)",
              padding: "12px",
              borderRadius: "16px",
              border: "1px solid #ccc",
              fontFamily: "inherit",
              fontSize: "1rem",
              resize: "none",
            }}
          />
        </Box>
      )}

      {/* IMAGE / GIF-VIDEO */}
      {(selectedBgType === "IMAGE" || selectedBgType === "GIF/VIDEO") && (
        <>
          <CircledButton
            isOutlined
            widthProp={150}
            heightProp={40}
            text="Upload"
            handleClick={handleFileClick}
            colorProp="#00BFA5"
          />
          <input
            type="file"
            accept={
              selectedBgType === "IMAGE" ? "image/*" : "image/gif,video/*"
            }
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Box>
          <Typography gutterBottom textAlign={"center"}>
            Smooth Edges
          </Typography>
          <CustomToggle
            leftLabel="0"
            rightLabel="1"
            value={Boolean(smoothEdges)}
            onChange={() => setSmoothEdges(!smoothEdges)}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Box>
        </Box>

        <Box>
          <Typography gutterBottom textAlign={"center"}>
            Mask
          </Typography>
          <Box>
            <CustomToggle
              leftLabel="HARD"
              rightLabel="SOFT"
              value={Boolean(mask)}
              onChange={() => setMask(!mask)}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <CircledButton
          isOutlined={true}
          widthProp={200}
          text="Generate"
          handleClick={() =>
            console.log({
              prompt,
              smoothEdges,
              mask,
            })
          }
          colorProp="#00BFA5"
        />
      </Box>
    </Box>
  );
}

export default BackgroundSelection;
