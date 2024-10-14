import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from "./pages/components/NavBar";
import RegisterCurse from "./pages/components/RegisterCurse";
import Home from "./pages/home/Home";
import { CurseItenProps } from "./props/CurseItenProps";


function App() {
  const [curses, setCurse] = useState<CurseItenProps[]>([]);

  const addCurse = (titulo: string, dataTermino: string, autor: string) => {
    setCurse([...curses, { titulo, dataTermino, autor }]);
  };

  const removeCurse = (index: number) => {
    const newCurse = curses.filter((_, i) => i !== index);
    setCurse(newCurse);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home curses={curses} removeCurse={removeCurse} />} />
        <Route path="/cadastrar-cursos" element={<RegisterCurse addCurse={addCurse} />} />
      </Routes>
    </Router>
  );
}

export default App;
