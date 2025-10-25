import { Card, CardMedia } from "@mui/material";

function VideoCard() {
  return (
    <Card sx={{ maxWidth: 1200, width: 800, height: 400 }}>
      <CardMedia
        component="video"
        src="/videos/example.mp4"
        controls
        autoPlay
        loop
        muted
        sx={{ borderRadius: 2 }}
      />
    </Card>
  );
}

export default VideoCard;
