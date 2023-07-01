import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import TamuList from "./assets/components/TamuList";
import ScanTamu from "./assets/components/ScanTamu";
import Undangan from "./assets/components/Undangan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TamuList />} />
          <Route path="/scan" element={<ScanTamu />} />
          <Route path="/tamu/:id/:id_tamu" element={<Undangan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
