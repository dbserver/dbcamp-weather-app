import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "../pages/cadastrar";
import Home from "../pages/home";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
            </Routes>
        </BrowserRouter>
    )
}