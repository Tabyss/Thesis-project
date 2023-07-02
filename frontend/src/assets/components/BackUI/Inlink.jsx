import { Routes, Route} from "react-router-dom"
import CreateUndangan from "./Elements/CreateUndangan"
import EditData from "./Elements/EditData"
import TamuList from "./Elements/TamuList"
import ScanTamu from "./Elements/ScanTamu"
import "./Style/App.scss"

function Inlink() {
  return (
    <Routes>
      <Route path="/Create" element={<CreateUndangan/>}/>
      <Route path="/Edit/:id_undangan" element={<EditData/>}/>
      <Route path="/Tamu/:id_undangan" element={<TamuList/>}/>
      <Route path="/scan/:id_undangan" element={<ScanTamu/>}/>
    </Routes>
  )
}

export default Inlink