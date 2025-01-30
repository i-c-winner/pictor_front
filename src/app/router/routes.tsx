import {Loginin} from "../../pages/loginin/module/Loginin.tsx";
import {About} from "../../pages/about/module/About.tsx";
import {Routes, Route} from "react-router";
import {Gallery} from "../../pages/gallery/module/Gallery.tsx";
import {AdminPage} from "../../pages/adminPage/module/AdminPage.tsx";

function AppRoutes() {
  return <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/loginin" element={<Loginin/>}/>
    <Route path="/gallery" element={<Gallery />}/>
    <Route path={"/admin"} element={<AdminPage />}/>
  </Routes>
}

export {AppRoutes}