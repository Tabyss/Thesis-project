import { Routes, Route} from "react-router-dom"

import CreateUndangan from "./Elements/CreateUndangan"
import EditData from "./Elements/EditData"
import TamuList from "./Elements/TamuList"
import ScanTamu from "./Elements/ScanTamu"
<<<<<<< HEAD

=======
import "./Style/App.scss"
import Tema from "./edithandle/Tema"
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
import Mempelai from "./edithandle/Mempelai"
import Insight from "./edithandle/Insight"
import Acara from "./edithandle/Acara"
import Tema from "./edithandle/Tema"

import "./Style/App.scss"

function Inlink() {
  return (
    <Routes>
      <Route path="/create" element={<CreateUndangan/>}/>
      <Route path="/edit/:id_undangan" element={<EditData/>}/>
      <Route path="/edit/1/:id_undangan" element={<Tema/>}/>
      <Route path="/edit/2/:id_undangan" element={<Mempelai/>}/>
      <Route path="/edit/3/:id_undangan" element={<Acara/>}/>
      <Route path="/edit/4/:id_undangan" element={<Insight/>}/>
      <Route path="/tamu/:id_undangan" element={<TamuList/>}/>
      <Route path="/scan/:id_undangan" element={<ScanTamu/>}/>
    </Routes>
  )
}

export default Inlink