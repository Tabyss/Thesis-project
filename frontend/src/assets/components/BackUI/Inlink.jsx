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
      <Route path="/Edit" element={<EditData/>}/>
      <Route path="/Tamu" element={<TamuList/>}/>
      <Route path="/scan" element={<ScanTamu/>}/>
    </Routes>
  )
}

export default Inlink