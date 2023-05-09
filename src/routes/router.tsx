import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "../pages/cadastrar";
import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";
import Listar from "../pages/listar";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/listar" element={<Listar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
