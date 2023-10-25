import { useState, useEffect } from "react";
import { MeteorologicalService } from "../../services/api/meteorogical";
import MeteriologicalData from "../../interfaces/Meteorological";
import styles from "./listar.module.css";
import { Link } from "react-router-dom";

export default function Listar() {
  const [dataCityList, setDataCityList] = useState([]);
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    findALL();
  }, []);

  const findByCity = async () => {
    const result = await MeteorologicalService.getByCity(cidade);
    if (result != null) {
      setDataCityList(result);
    } else {
      alert("Nenhum registro de " + cidade + " foi encontrado");
    }
  };

  const findALL = async () => {
    const result = await MeteorologicalService.getALL();
    if (result[0] != null) {
      setDataCityList(result);
    } else {
      alert("Nenhum registro de " + cidade + " foi encontrado");
    }
  };

  const deleteById = (id: number) => {
    MeteorologicalService.deleteById(id)
  }

  return (
    <main className={styles.conteiner}>
      <section className={styles.section1}>
        <h1 className={styles.title}>Lista de Cidades</h1>
        <div className={styles.inpt_box}>
          <label>Cidade</label>
          <div className={styles.inpt_style}>
            <input
              type="text"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
            <span onClick={findByCity} className={styles.lupa_icon}></span>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.tabela}>
          <label>Cidade</label>
          <label>Data</label>
          <label>Ação</label>
        </div>

        <div className={styles.list}>
          {dataCityList.map((item: MeteriologicalData) => (
            <div className={styles.elementList} key={item.id}>
              <h2>{item.cidade}</h2>
              <h2 className={styles.data}>{item.data}</h2>
              <div className={styles.icons}>
                <Link to={"/editar/" + item.id}> <span className={styles.edit_icon}></span> </Link>
                <span className={styles.trash_icon} onClick={ () => deleteById(item.id)}></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}