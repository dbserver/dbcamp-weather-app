import { useState } from "react";
import styles from "./cadastrar.module.css";
import axios from "axios";
import { MeteorologicalService } from "../../services/api/meteorogical";

export default function Cadastrar() {
  const [cidade, setCidade] = useState("salvador");
  const [data, setData] = useState("");
  const [tempoDia, setTempoDia] = useState("SOL");
  const [tempoNoite, setTempoNoite] = useState("CHUVA");
  const [temperaturaMaxima, setTemperaturaMaxima] = useState<any>();
  const [temperaturaMinima, setTemperaturaMinima] = useState<any>();
  const [precipitacao, setPrecipitacao] = useState<any>();
  const [umidade, setUmidade] = useState<any>();
  const [ventos, setVentos] = useState<any>();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      MeteorologicalService.create(
        cidade,
        data,
        tempoDia,
        tempoNoite,
        temperaturaMaxima,
        temperaturaMinima,
        precipitacao,
        umidade,
        ventos
      );
    } catch {
      alert("Ops, ocorreu um erro ao realizar seu cadastro.");
    }
  }

  return (
    <main className={styles.conteiner}>
      <h1 id={styles.title} >Cadastro Metereológico</h1>
      <form onSubmit={handleSubmit}>
        <section className={styles.section1}>
          <div className={styles.inpt_box}>
            <label>Cidade</label>
            <input
              type="text"
              id={styles.cidade}
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>

          <div className={styles.inpt_box}>
            <label>Data</label>
            <input
              type="date"
              id={styles.data}
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.col} id={styles.col1}>
            <div className={styles.inpt_box}>
              <label>Tempo</label>
              <select
                name="select"
                className={styles.tempo}
                value={tempoDia}
                onChange={(event) => setTempoDia(event.target.value)}
              >
                <option value="SOL" selected>
                  Sol
                </option>
                <option value="CHUVA">Chuva</option>
                <option value="NUBLADO">Nublado</option>
                <option value="TEMPESTADE">Tempestade</option>
                <option value="SOL_COM_NUVENS">Sol com nuvens</option>
              </select>

              <select
                name="select"
                className={styles.tempo}
                value={tempoNoite}
                onChange={(event) => setTempoNoite(event.target.value)}
              >
                <option value="CHUVA" selected>Chuva</option>
                <option value="NUBLADO">Nublado</option>
                <option value="TEMPESTADE">Tempestade</option>
                <option value="LIMPO">Limpo</option>
              </select>
            </div>

            <div className={styles.inpt_box}>
              <label>Turno</label>
              <div className={styles.turno}>Manhã</div>
              <div className={styles.turno}>Noite</div>
            </div>
          </div>

          <div className={styles.col} id={styles.col2}>
            <div className={styles.inpt_box} id={styles.temperaturaBox}>
              <label>Temperatura Máxima</label>
              <div className={styles.inpt_style}>
                <input
                  className={styles.input_number_int}
                  required
                  type="number"
                  name="temperaturaMaxima"
                  value={temperaturaMaxima}
                  onChange={(event) => setTemperaturaMaxima(event.target.value)}
                />
              </div>
            </div>
            <div className={styles.inlineBlock}>
            <div className={styles.inpt_box}>
              <label>Precipitação</label>
              <div className={styles.inpt_style}>
                <input
                  className={styles.input_number_int}
                  required
                  type="number"
                  name="precipitacao"
                  value={precipitacao}
                  onChange={(event) => setPrecipitacao(event.target.value)}
                />
                <span>%</span>
              </div>
            </div>
            <div className={styles.inpt_box}>
              <label>Umidade</label>
              <div className={styles.inpt_style}>
                <input
                  className={styles.input_number_int}
                  required
                  type="number"
                  name="umidade"
                  value={umidade} 
                  onChange={(event) => setUmidade(event.target.value)}
                />
                <span>%</span>
              </div>
            </div>
            </div>
          </div>

          <div className={styles.col} id={styles.col2}>
            <div className={styles.inpt_box} id={styles.temperaturaBox}>
              <label>Temperatura Minima</label>
              <div className={styles.inpt_style}>
                <input
                  className={styles.input_number_int}
                  required
                  type="number"
                  name="temperaturaMinima"
                  value={temperaturaMinima}
                  onChange={(event) => setTemperaturaMinima(event.target.value)}
                />
              </div>
            </div>
            <div className={styles.inpt_box}>
              <label>Velocidade do vento</label>
              <div className={styles.inpt_style}>
                <input
                  className={styles.input_number_int}
                  required
                  type="number"
                  name="ventos"
                  value={ventos}
                  onChange={(event) => setVentos(event.target.value)}
                />
                <span>%</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.buttonsBox}>
          <button type="reset">Cancelar</button>
          <button type="submit">Cadastrar</button>
        </div>

      </form>
    </main>
  );
}
