import {Box, MenuItem} from "@mui/material";
import "../styles/mainmenu.scss"
import {useNavigate} from "react-router";

function MainMenu() {
  const navigate=useNavigate();
  return (
    <Box className="menu">
      <MenuItem onClick={() => {navigate("/gallery")}}>Рисунки</MenuItem>
      <MenuItem onClick={() => {}}>Видео</MenuItem>
      <MenuItem onClick={() => {navigate("/admin")}}>Лепка и фигуры</MenuItem>
    </Box>

  )
}

export {MainMenu};