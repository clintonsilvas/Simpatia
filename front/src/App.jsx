import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/Nav.jsx";
import Footer from "./assets/components/Footer.jsx";
import Unifenas from "./assets/pages/Unifenas.jsx";
import Ferramentas from "./assets/pages/Ferramentas.jsx";
import Index from "./assets/pages/Index.jsx";

import MODULOS_DATA from "./data/modulosData";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/modulos/:tipo"
          element={<Ferramentas todosModulos={MODULOS_DATA} />}
        />
        <Route path="/about" element={<Unifenas />} />
        <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
