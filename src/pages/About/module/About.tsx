import {Spotlight} from "../../../entities/spotLight/module/SpotLight.tsx";
import {Box} from "@mui/material";
import "react-multi-carousel/lib/styles.css";

function About() {
  if (import.meta.env.MODE === "product") {
    console.log("development");
    console.log(import.meta.env.VITE_FONT_PATH); // Должно вывести "/fonts/dev/" или "/fonts/prod/"

  }
  console.log(import.meta.env);

  return (
    <Box className="about">
      <div
        className="carousel"
      >
        <div className={"img"}><img className={'img img_1'} src={`${import.meta.env.VITE_PATH_TO_IMAGES}/images/carousel/ckok.jpg`}/></div>
        <div className={"img"}><img className="img img_2" src={`${import.meta.env.VITE_PATH_TO_IMAGES}/images/carousel/radiodemon.jpg`}/>
        </div>
        <div className={"img"}><img className={"img img_3"}
          src={`${import.meta.env.VITE_PATH_TO_IMAGES}/images/carousel/egor.jpg`}/></div>
        <div className={"img"}><img className={"img img_4"} src={`${import.meta.env.VITE_PATH_TO_IMAGES}/images/carousel/tanos.jpg`}/></div>
        <div className={"img"}><img className={"img img_5"} src={`${import.meta.env.VITE_PATH_TO_IMAGES}/images/carousel/cat.jpg`}/></div>
        <div className="title-wrapper">
          <p className="text text_title">EGOR BELOUSOV</p>
          <p className="text text_subtitle">юный художник и любитель океана</p>
        </div>

      </div>

      <Spotlight/>
    </Box>
  )
}

export {About}