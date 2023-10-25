import { useEffect, useState } from "react";
import styles from "./editar.module.css";
import { MeteorologicalService } from "../../services/api/meteorogical";
import { useParams } from "react-router";

export default function Editar() {
  const [cidade, setCidade] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [tempoDia, setTempoDia] = useState<string>("");
  const [tempoNoite, setTempoNoite] = useState<string>("");
  const [temperaturaMaxima, setTemperaturaMaxima] = useState<any>();
  const [temperaturaMinima, setTemperaturaMinima] = useState<any>();
  const [precipitacao, setPrecipitacao] = useState<any>();
  const [umidade, setUmidade] = useState<any>();
  const [ventos, setVentos] = useState<any>();

  const idOnPath: number = Number(useParams().id);

  useEffect(() => {
    findById(idOnPath);
  }, []);

  const findById = async (id: number) => {
    const result = await MeteorologicalService.getById(id);
    if (result != null) {
      setCidade(result.cidade);
      setData(result.data);
      setPrecipitacao(result.precipitacao);
      setTemperaturaMaxima(result.temperaturaMaxima);
      setTemperaturaMinima(result.temperaturaMinima);
      setTempoDia(result.tempoDia);
      setTempoNoite(result.tempoNoite);
      setUmidade(result.umidade);
      setVentos(result.velocidadeVentos);
    } else {
      alert("O item escolhido não foi encontrado");
    }
  };

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      MeteorologicalService.updateById(
        idOnPath,
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
      alert("Parabéns você atualizou um registro");
    } catch {
      alert(
        "Infelizmente ouve um erro e você não conseguiu atualizar este registro"
      );
    }
  }

  return (
    <main className={styles.conteiner}>
      <h1 className={styles.title}>Editar Cadastro Metereológico</h1>
      <form onSubmit={handleSubmit}>
        <section className={styles.section1}>
          <div className={styles.inpt_box}>
            <label>Cidade</label>
            <input
              type="text"
              className={styles.cidade}
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>

          <div className={styles.inpt_box}>
            <label>Data</label>
            <input
              type="date"
              className={styles.data}
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={`${styles.col} ${styles.col1}`}>
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

          <div className={`${styles.col} ${styles.col2}`}>
            <div className={`${styles.inpt_box} ${styles.temperaturaBox}`}>
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

          <div className={`${styles.col} ${styles.col2}`} >
              
            <div className={`${styles.inpt_box} ${styles.temperaturaBox}`}>
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
          <button type="submit">Salvar</button>
        </div>
      </form>
    </main>
  );
}
