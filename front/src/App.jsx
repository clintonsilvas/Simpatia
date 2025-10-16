import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/Nav.jsx";
import Footer from "./assets/components/Footer.jsx";
import Unifenas from "./assets/pages/Unifenas.jsx";
import Ferramentas from "./assets/pages/Ferramentas.jsx";
import Index from "./assets/pages/Index.jsx";

const dadosModulos = {
  // Renomeei para evitar conflito
  professor: [
    {
      titulo: "Gerenciar Turmas",
      descricao: "Controle completo de alunos e turmas.",
      id: "p1",
    },
    {
      titulo: "Avaliações",
      descricao: "Crie e acompanhe provas e notas.",
      id: "p2",
    },
    {
      titulo: "Relatórios",
      descricao: "Analise o desempenho das turmas.",
      id: "p3",
    },
  ],
  aluno: [
    {
      titulo: "Meus Cursos",
      descricao: "Acesse todo o conteúdo em um só lugar.",
      id: "a1",
    },
    {
      titulo: "Assistente IA",
      descricao: "Receba ajuda personalizada nos estudos.",
      id: "a2",
    },
    {
      titulo: "Calendário",
      descricao: "Veja suas aulas e prazos facilmente.",
      id: "a3",
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/modulos/:tipo"
          element={<Ferramentas todosModulos={dadosModulos} />}
        />
        <Route path="/about" element={<Unifenas />} />
        <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
