import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Cadastrar from "./pages/cadastrar";

function App() {
  return (
    <>
      <Header/>
      <Cadastrar />
      <Footer/>
    </>
  );
}

export default App;
