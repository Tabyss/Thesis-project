import { Routes, Route} from "react-router-dom"
import ThemeOne from "./ThemeOne/ThemeOne"
import ThemeTwo from "./ThemeTwo/ThemeTwo"
import Theme1 from "./toPrint/Theme1"

function Undangan() {
  return (
    <Routes>
      <Route path="/invitation/:url_undangan/:id_tamu" element={<ThemeOne/>}/>
      <Route path="/invitation2/:url_undangan/:id_tamu" element={<ThemeTwo/>}/>
      <Route path="/invitation3/:url_undangan/:id_tamu" element={<Theme1/>}/>
    </Routes>
  )
}

export default Undangan