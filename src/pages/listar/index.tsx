import { useState, useEffect } from "react";
import { MeteorologicalService } from "../../services/api/meteorogical";
import MeteriologicalData from "../../interfaces/Meteorological";
import styles from "./listar.module.css";

export default function Listar() {
  const [dataCityList, setDataCityList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await MeteorologicalService.getByCity("salvador");
      setDataCityList(result);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.conteiner}>
      <section className={styles.section1}>
        <h1>Lista de Cidades</h1>
        <div className={styles.inpt_box}>
          <label>Cidade</label>
          <div className={styles.inpt_style}>
            <input type="text" />
            <span id={styles.lupa_icon}></span>
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
              <h2>{item.data}</h2>
              <div className={styles.icons}>
                <span id={styles.edit_icon}></span>
                <span id={styles.trash_icon}></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
