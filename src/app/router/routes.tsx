import {Loginin} from "../../pages/Loginin/module/Loginin.tsx";
import {About} from "../../pages/About/module/About.tsx";
import {Routes, Route} from "react-router";

function AppRoutes() {
  return <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/loginin" element={<Loginin/>}/>
  </Routes>
}

export {AppRoutes}