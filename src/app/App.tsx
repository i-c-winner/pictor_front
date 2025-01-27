import {BrowserRouter} from "react-router";
import {AppRoutes} from "./router/routes.tsx";
import {Box} from "@mui/material";

function App() {
  return (
    <Box >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Box>
  )
}

export {App}