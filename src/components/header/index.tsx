import { useRef, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMode = () =>{
    setMenuOpen(!menuOpen)
  }
  
  function menuToggle() {
  }

  return (
    <header className={styles.header}>
      <nav>
        <button onClick={menuToggle}>| | |</button>
        <ul className={styles.menu}>
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
