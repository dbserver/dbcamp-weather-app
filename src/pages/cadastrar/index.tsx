import { useState } from "react";
import styles from "./cadastrar.module.css";
import axios from "axios";

export default function Cadastrar() {
  const [cidade, setCidade] = useState("Salvador");
  const [data, setData] = useState("");
  const [tempo, setTempo] = useState("SOL");
  const [turno, setTurno] = useState("DIA");
  const [temperaturaMaxima, setTemperaturaMaxima] = useState<any>();
  const [temperaturaMinima, setTemperaturaMinima] = useState<any>();
  const [precipitacao, setPrecipitacao] = useState<any>();
  const [umidade, setUmidade] = useState<any>();
  const [ventos, setVentos] = useState<any>();

  async function post() {
    axios
      .post("http://localhost:4767/api/v1/meteorologia", {
        cidade: cidade,
        data: data,
        tempo: tempo,
        turno: turno,
        temperaturaMaxima: temperaturaMaxima,
        temperaturaMinima: temperaturaMinima,
        precipitacao: precipitacao,
        umidade: umidade,
        velocidadeVentos: ventos,
      })
      .then(function (response: any) {
        console.log(response);
        alert("Parabéns você cadastrou um registro");
      })
      .catch(function (error: any) {
        console.error(error);
        alert("Infelizmente você não conseguiu cadastrar um registro");
      });
  }

  function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault();
      try {
        post();
      } catch {
        alert("Ops, ocorreu um erro ao realizar seu cadastro.");
      }
    } catch {
      alert("Ops, ocorreu um erro ao realizar seu cadastro.");
    }
  }

  return (
    <div className={styles.conteiner}>
      <h1>Cadastro Meteorológico</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.line}>
          <div className={styles.input_line} id={styles.cidadeBox}>
            <label htmlFor="">Cidade</label>
            <input
              required
              type="text"
              name="cidade"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>

          <div className={styles.input_line}>
            <label htmlFor="">Data</label>
            <input
              required
              type="date"
              name="data"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.form_box}>
          <div className={styles.coluna}>
            <div className={styles.input_line} id={styles.tempoBox}>
              <label htmlFor="">Tempo</label>
              <select
                name="select"
                className={styles.inputBox}
                value={tempo}
                onChange={(event) => setTempo(event.target.value)}
              >
                <option value="SOL" selected>
                  Sol
                </option>
                <option value="CHUVA">Chuva</option>
                <option value="NUBLADO">Nublado</option>
                <option value="TEMPESTADE">Tempestade</option>
                <option value="SOL_COM_NUVENS">Sol com nuvens</option>
              </select>
            </div>

            <div className={styles.input_line}>
              <label htmlFor="">Turno</label>
              <select
                name="select"
                value={turno}
                onChange={(event) => setTurno(event.target.value)}
              >
                <option value="DIA" selected>
                  Manhã
                </option>
                <option value="NOITE">Noite</option>
              </select>
            </div>
          </div>

          <div className={styles.coluna}>
            <div>
              <label htmlFor="">Temperatura máxima</label>
              <input
                required
                type="number"
                name="temperaturaMaxima"
                value={temperaturaMaxima}
                onChange={(event) => setTemperaturaMaxima(event.target.value)}
              />
            </div>
            <div className={styles.input_line} id={styles.precipitacao}>
              <label htmlFor="">Precipitação</label>
              <input
                required
                type="number"
                name="precipitacao"
                value={precipitacao}
                onChange={(event) => setPrecipitacao(event.target.value)}
              />
            </div>
            <div className={styles.input_line}>
              <label htmlFor="">Humidade</label>
              <input
                required
                type="number"
                name="humidade"
                value={umidade}
                onChange={(event) => setUmidade(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.coluna}>
            <label htmlFor="">Temperatura mínima</label>
            <input
              required
              type="number"
              name="temperaturaMinima"
              value={temperaturaMinima}
              onChange={(event) => setTemperaturaMinima(event.target.value)}
            />
            <label htmlFor="">Velocidade do vento</label>
            <input
              required
              type="number"
              name="velocidadeDoVento"
              value={ventos}
              onChange={(event) => setVentos(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.buttonsBox}>
          <button>Cancelar</button>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
