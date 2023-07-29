import { Routes, Route} from "react-router-dom"
import HandleTheme from "./toPrint/HandleTheme"
import HandlePrintTheme from "./toPrint/HandlePrintTheme"

function Undangan() {
  return (
    <Routes>
      <Route path="/invitation/:url_undangan/:id_tamu" element={<HandleTheme/>}/>
      <Route path="/print/:url_undangan/:id_tamu" element={<HandlePrintTheme />}/>
    </Routes>
  )
}

export default Undangan