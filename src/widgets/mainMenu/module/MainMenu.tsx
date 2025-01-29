import {Box, MenuItem} from "@mui/material";
import "../styles/mainmenu.scss"
import {useNavigate} from "react-router";

function MainMenu() {
  const navegate=useNavigate();
  return (
    <Box className="menu">
      <MenuItem onClick={() => {navegate("/gallery")}}>Рисунки</MenuItem>
      <MenuItem onClick={() => {}}>Видео</MenuItem>
      <MenuItem onClick={() => {}}>Лепка и фигуры</MenuItem>
    </Box>

  )
}

export {MainMenu};