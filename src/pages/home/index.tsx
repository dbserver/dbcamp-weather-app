import MeteriologicalData from "../../interfaces/Meteorological";
import { MeteorologicalService } from "../../services/api/meteorogical";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import climaSol from "../../assets/clima-sol-image.png";
import guardachuvaImage from "../../assets/guarda-chuva-image.png";
import gotaImage from "../../assets/gota-image.png";
import ventoImage from "../../assets/vento-image.png";

export default function Home() {
  const [meteorologicalRegisterList, setMeteorologicalRegisterList] = useState(
    []
  );
  const [dataCityList, setDataCityList] = useState([]);
  const [cidade, setCidade] = useState("Salvador");
  const [temperaturaMaxima, setTemperaturaMaxima] = useState(36);
  const [temperaturaMinima, setTemperaturaMinima] = useState(27);

  useEffect(() => {
    findByCity();
  }, []);

  const findByCity = async () => {
    const result = await MeteorologicalService.getByCity(cidade);
    if (result != null) {
      setDataCityList(result);
    } else {
      alert("Nenhum registro de " + cidade + " foi encontrado, porfavor tente outra cidade");
    }
  };

  return (
    <main className={styles.conteiner}>
      <section className={styles.section1}>
        <div id={styles.title}>
          <h1>Hoje</h1>
        </div>

        <div className={styles.findCity}>
          <h2>Pesquise a cidade</h2>
          <div className={styles.inpt_box}>
            <div className={styles.inpt_style}>
              <span className={styles.lupa_home_icon} onClick={findByCity}></span>
              <input
                type="text"
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
              />
            </div>
            <div id={styles.gps_icon_box}>
              <span className={styles.gps_icon}></span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>

        <div className={styles.destaque}>
          <div id={styles.col1}>
            <img src={climaSol} alt="clima" />
            <div className={styles.temperatura_box}>
              <span id={styles.temperatura_maxima}>{temperaturaMaxima}º</span>
              <span id={styles.separador}>/</span>
              <span id={styles.temperatura_minima}>{temperaturaMinima}º</span>
            </div>
          </div>
          <div id={styles.col2}>
            <div id={styles.guardachuva}>
              <img src={guardachuvaImage} alt="Precipitação" />
              <h2>30%</h2>
              <h3>Precipitação</h3>
            </div>
            <div id={styles.guardachuva}>
              <img src={gotaImage} alt="Umidade" />
              <h2>30%</h2>
              <h3>Umidade</h3>
            </div>
            <div id={styles.guardachuva}>
              <img src={ventoImage} alt="Velocidade Vento" />
              <h2>30%</h2>
              <h3>Velocidade Vento</h3>
            </div>
          </div>
        </div>

        <div className="list_registers">
        {dataCityList.map((item: MeteriologicalData) => (
            <div className={styles.elementList} key={item.id}>
              <h2>{item.cidade}</h2>
              
            </div>
          ))}
        </div>
      </section>
    </main>
    // <div>
    //   {meteorologicalRegisterList.map((item: MeteriologicalData ) => (
    //     <div key={item.id}>
    //       <h1>{item.cidade}</h1>
    //       <h2>{item.tempo}</h2>
    //       <p>{item.turno}</p>
    //     </div>
    //   ))}
    // </div>
  );
}
