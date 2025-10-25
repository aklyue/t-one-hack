import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CircledButton from "../UI/CircledButton";
import BackgroundSelection from "../UI/BackgroundSelection";

function CameraDisplay() {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedBgType, setSelectedBgType] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [prompt, setPrompt] = useState("");
  const [smoothEdges, setSmoothEdges] = useState(false);
  const [mask, setMask] = useState(false);

  const [wsStatus, setWsStatus] = useState("disconnected");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const resultCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // --- Refs для актуальных значений для WS ---
  const bgTypeRef = useRef(selectedBgType);
  const promptRef = useRef(prompt);
  const smoothEdgesRef = useRef(smoothEdges);
  const maskRef = useRef(mask);

  useEffect(() => {
    bgTypeRef.current = selectedBgType;
  }, [selectedBgType]);
  useEffect(() => {
    promptRef.current = prompt;
  }, [prompt]);
  useEffect(() => {
    smoothEdgesRef.current = smoothEdges;
  }, [smoothEdges]);
  useEffect(() => {
    maskRef.current = mask;
  }, [mask]);

  // --- WebSocket setup ---
  useEffect(() => {
    if (!isStarted) {
      wsRef.current?.close();
      wsRef.current = null;
      setWsStatus("disconnected");
      return;
    }

    const ws = new WebSocket("ws://127.0.0.1:8000/segment");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected");
      setWsStatus("connected");
      ws.send(
        JSON.stringify({
          type: "start",
          meta: { fps: 10, mode: "mask", return: "mask" },
        })
      );
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "result" && msg.data) {
          const img = new Image();
          img.src = `data:image/${msg.format || "png"};base64,${msg.data}`;
          img.onload = () => {
            const canvas = resultCanvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;

            // внутренний размер
            canvas.width = img.width;
            canvas.height = img.height;
            // отображаемый размер CSS
            canvas.style.width = "320px";
            canvas.style.height = "240px";

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
        } else if (msg.type === "status") {
          console.log("📡 Status:", msg);
        } else if (msg.type === "error") {
          console.error("🚫 Server error:", msg.message);
        }
      } catch (err) {
        console.warn("⚠️ WS parse error:", err);
      }
    };

    ws.onerror = (err) => console.error("❌ WebSocket error", err);
    ws.onclose = () => {
      console.log("🔌 WebSocket closed");
      setWsStatus("disconnected");
    };

    return () => ws.close();
  }, [isStarted]);

  // --- Camera + frame sending loop ---
  useEffect(() => {
    if (!isStarted) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!video || !canvas || !ctx) return;

    navigator.mediaDevices
      .getUserMedia({ video: { width: 320, height: 240 } })
      .then((stream) => {
        streamRef.current = stream;
        video.srcObject = stream;
        video.play();

        let frameId = 0;
        let stopped = false;

        const sendFrame = () => {
          if (stopped || !isStarted) return;
          if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN)
            return;

          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0);

          const base64 = canvas.toDataURL("image/jpeg", 0.6).split(",")[1];

          wsRef.current.send(
            JSON.stringify({
              type: "frame",
              frame_id: `f_${frameId++}`,
              data: base64,
              meta: {
                width: video.videoWidth,
                height: video.videoHeight,
                fps: 10,
                quality: 60,
                background_type: bgTypeRef.current,
                prompt: promptRef.current,
                smoothEdges: smoothEdgesRef.current,
                mask: maskRef.current,
              },
            })
          );

          setTimeout(sendFrame, 100);
        };

        sendFrame();

        return () => {
          stopped = true;
          stream.getTracks().forEach((t) => t.stop());
          video.srcObject = null;
        };
      })
      .catch((err) => console.error("🚫 Camera error:", err));

    return () => {
      // Stop previous stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        video.srcObject = null;
      }
    };
  }, [isStarted]);

  return (
    <Box sx={{ px: isMobile ? 4 : 8, py: 4 }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        {/* Левая часть */}
        <Grid sx={{ xs: 12, md: 6, }}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center" gap={3}>
              <Typography variant="h5" fontSize={48}>
                Camera
              </Typography>
              <CircledButton
                isOutlined
                widthProp={100}
                text={isStarted ? "STOP" : "START"}
                handleClick={() => setIsStarted((prev) => !prev)}
                colorProp="#00BFA5"
              />
            </Box>

            <Typography variant="body2">
              WebSocket: <strong>{wsStatus}</strong>
            </Typography>

            <Box display="flex" gap={2}>
              <video
                ref={videoRef}
                width="320"
                height="240"
                style={{ borderRadius: 8, background: "#000" }}
                muted
              />
              <canvas
                ref={resultCanvasRef}
                width={320}
                height={240}
                style={{ borderRadius: 8, background: "#111" }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Правая часть */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Box>
            <Typography variant="h5" fontSize={48}>
              Generate Background
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2}>
                <CircledButton
                  widthProp={150}
                  text="image"
                  handleClick={() => setSelectedBgType("IMAGE")}
                  colorProp="#00BFA5"
                />
                <CircledButton
                  widthProp={150}
                  text="GIF/VIDEO"
                  handleClick={() => setSelectedBgType("GIF/VIDEO")}
                  colorProp="#00BFA5"
                />
                <CircledButton
                  widthProp={150}
                  text="AI GENERATE"
                  handleClick={() => setSelectedBgType("AI-GENERATE")}
                  colorProp="#00BFA5"
                />
              </Box>
              <Typography variant="body2">
                {!selectedBgType
                  ? "Select the background type"
                  : `You have selected `}
                <strong>{selectedBgType}</strong>
              </Typography>
            </Box>

            {selectedBgType && (
              <BackgroundSelection
                selectedBgType={selectedBgType}
                prompt={prompt}
                setPrompt={setPrompt}
                smoothEdges={smoothEdges}
                setSmoothEdges={setSmoothEdges}
                mask={mask}
                setMask={setMask}
              />
            )}
          </Box>
        </Grid>
      </Box>

      {/* Скрытый canvas для отправки кадров */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Box>
  );
}

export default CameraDisplay;
