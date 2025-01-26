import {StartPage} from "../../pages/StartPage.tsx";
import {About} from "../../pages/About.tsx";
import {Routes, Route} from "react-router";

function AppRoutes() {
  return <Routes>
    <Route path="/" element={<StartPage/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
}

export {AppRoutes}