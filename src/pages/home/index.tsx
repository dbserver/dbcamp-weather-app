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
  const [cidade, setCidade] = useState("salvador");
  const [dataCidadeHoje, setDataCidadeHoje] = useState<MeteriologicalData>();

  useEffect(() => {
    findWeekByCity();
  }, []);

  const findDataCityToday = async () => {
    const result = await MeteorologicalService.getByCityToday(cidade);
    if (result != null) {
      setDataCidadeHoje(result);
    } else {
      setCidade("")
      alert(
        "Nenhum registro de " +
          cidade +
          " foi encontrado para hoje, tente outra cidade"
      );
    }
  };

  const findWeekByCity = async () => {
    findDataCityToday();
    const result = await MeteorologicalService.getWeekByCity(cidade);
    if (result != null) {
      setDataCityList(result);
    } else {
      setDataCityList([]);
      alert(
        "Nenhum registro da semana sequinte foi encontrado para " +
          cidade +
          ", tente outra cidade"
      );
    }
  };

  return (
    <main className={styles.conteiner}>
      <section className={styles.section1}>
        <div className={styles.title}>
          <h1>Hoje</h1>
        </div>

        <div className={styles.findCity}>
          <h2>Pesquise a cidade</h2>
          <div className={styles.inpt_box}>
            <div className={styles.inpt_style}>
              <span
                className={styles.lupa_home_icon}
                onClick={findWeekByCity}
              ></span>
              <input
                type="text"
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
              />
            </div>
            <div className={styles.gps_icon_box}>
              <span className={styles.gps_icon}></span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.destaque}>
          <div className={styles.col1}>
            <img src={climaSol} alt="clima" />
            <div className={styles.temperatura_box}>
              <span className={styles.temperatura_maxima}>
                {dataCidadeHoje?.temperaturaMaxima}º
              </span>
              <span className={styles.separador}>/</span>
              <span className={styles.temperatura_minima}>
                {dataCidadeHoje?.temperaturaMinima}º
              </span>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.guardachuva}>
              <img src={guardachuvaImage} alt="Precipitação" />
              <h2>{dataCidadeHoje?.precipitacao}%</h2>
              <h3>Precipitação</h3>
            </div>
            <div className={styles.guardachuva}>
              <img src={gotaImage} alt="Umidade" />
              <h2>{dataCidadeHoje?.umidade}%</h2>
              <h3>Umidade</h3>
            </div>
            <div className={styles.guardachuva}>
              <img src={ventoImage} alt="Velocidade Vento" />
              <h2>{dataCidadeHoje?.velocidadeVentos}km/h</h2>
              <h3>Velocidade Vento</h3>
            </div>
          </div>
        </div>

        <div className={styles.list_registers}>
          {dataCityList.map((item: MeteriologicalData) => (
            <div className={styles.elementList} key={item.id}>
              <h2>{item.data}</h2>
              <div className={styles.clima}>
                <img src={climaSol} alt={"imagem" + item.tempoDia} />
                <h2>{item.tempoDia}</h2>
              </div>

              <div className={styles.temperatura}>
                <h2>{"+" + item.temperaturaMaxima}</h2>
                <h2>{"+" + item.temperaturaMinima}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
