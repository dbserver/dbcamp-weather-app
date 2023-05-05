import styles from "./header.module.css";
import { useNavigate } from 'react-router-dom';


export default function Header() {

  function menuToggle() {
    document.getElementById("menu")?.classList.toggle("colapse");
  }

  return (
    <header className={styles.header}>
      <nav>
        <button onClick={menuToggle}>| | |</button>
        <ul className={styles.menu} id="menu">
          <li>
            Home
          </li>
          <li>
            Cadastrar
          </li>
          <li>
            Listar
          </li>
        </ul>
      </nav>
    </header>
  );
}
