import {Loginin} from "../../pages/Loginin/module/Loginin.tsx";
import {About} from "../../pages/About/module/About.tsx";
import {Routes, Route} from "react-router";
import {Gallery} from "../../pages/gallery/module/Gallery.tsx";

function AppRoutes() {
  return <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/loginin" element={<Loginin/>}/>
    <Route path="/gallery" element={<Gallery />}/>
  </Routes>
}

export {AppRoutes}