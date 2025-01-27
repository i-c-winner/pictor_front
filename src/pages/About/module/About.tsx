import {Spotlight} from "../../../entities/spotLight/module/SpotLight.tsx";
import {Box} from "@mui/material";


function About() {
  if (import.meta.env.MODE === "development") {
    console.log("development");
  }

  return (
    <Box sx={{width: '100vw', height: '100vh', position: 'relative'}}>
      <h1>About</h1>

      <Spotlight />
      <button style={{position: "relative"}} onClick={() => console.info('OK')}>console.</button>



    </Box>
  )
}

export {About}