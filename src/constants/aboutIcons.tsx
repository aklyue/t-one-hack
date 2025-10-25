import ComputerIcon from "@mui/icons-material/Computer";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MovieIcon from "@mui/icons-material/Movie";
import GifIcon from "@mui/icons-material/Gif";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export const aboutIcons = [
  {
    icon: <ComputerIcon sx={{ fontSize: 48, color: "#00BFA5" }} />,
    label: "AI",
  },
  {
    icon: <PhotoCameraIcon sx={{ fontSize: 48, color: "#00BFA5" }} />,
    label: "Фото",
  },
  {
    icon: <MovieIcon sx={{ fontSize: 48, color: "#00BFA5" }} />,
    label: "Видео",
  },
  { icon: <GifIcon sx={{ fontSize: 48, color: "#00BFA5" }} />, label: "GIF-медиа" },
  {
    icon: <TextFieldsIcon sx={{ fontSize: 48, color: "#00BFA5" }} />,
    label: "Промптинг",
  },
];
