import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMode = () =>{
    setMenuOpen(!menuOpen)
  }
  
  function menuToggle() {
    document.getElementById("menu")?.classList.toggle("colapse");
  }

  return (
    <header className={styles.header}>
      <nav id="test">
        <button onClick={menuToggle}>| | |</button>
        <ul className={styles.menu} id="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cadastrar"}>Cadastrar</Link>
          </li>
          <li>
            <Link to={"/listar"}>Listar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
