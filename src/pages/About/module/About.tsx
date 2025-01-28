import {Spotlight} from "../../../entities/spotLight/module/SpotLight.tsx";
import {Box} from "@mui/material";
import "react-multi-carousel/lib/styles.css";

function About() {
  if (import.meta.env.MODE === "development") {
    console.log("development");
  }

  return (
    <Box className="about">
      <div
        className="carousel"
      >
        <div className={"img"}><img className={'img img_1'} src="../../../../public/images/carousel/1712837652574.jpeg"/></div>
        <div className={"img"}><img className="img img_2" src="../../../../public/images/carousel/222683593504.jpg.webp"/></div>
        <div className={"img"}><img className={"img img_3"} src="../../../../public/images/carousel/u26g8z4dynglriin2ko9cbccy8fy4g8s.jpg.webp"/></div>
        <div className={"img"}><img className={"img img_4"} src="../../../../public/images/carousel/tanos.jpg"/></div>
        <div className={"img"}><img className={"img img_5"} src="../../../../public/images/carousel/cat.jpg"/></div>
      </div>
      <Spotlight/>
    </Box>
  )
}

export {About}