import {Box, MenuItem} from "@mui/material";
import "../styles/mainmenu.scss"

function MainMenu() {
  return (
    <Box className="menu">
      <MenuItem onClick={() => {}}>Рисунки</MenuItem>
      <MenuItem onClick={() => {}}>Видео</MenuItem>
      <MenuItem onClick={() => {}}>Лепка и фигуры</MenuItem>
    </Box>

  )
}

export {MainMenu};