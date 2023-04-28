import styles from "./cadastrar.module.css";

export default function Cadastrar() {
  return (
    <div className={styles.conteiner}>
      <h1>Cadastro Meteorológico</h1>

      <div className={styles.form}>
        <div className={styles.line}>
          <div className={styles.content_input} id={styles.cidadeBox}>
            <label htmlFor="">Cidade</label>
            <input type="text" name="cidade" />
          </div>

          <div className={styles.content_input}>
            <label htmlFor="">Data</label>
            <input type="date" name="data" id="" />
          </div>
        </div>

        <div className={styles.form_box}>

          <div className={styles.coluna}>

            <div className={styles.content_input} id={styles.tempoBox}>
              <label htmlFor="">Tempo</label>
              <select name="select" className={styles.inputBox}>
                <option value="SOL" selected>Sol</option>
                <option value="CHUVA">Chuva</option>
                <option value="NUBLADO">Nublado</option>
                <option value="TEMPESTADE">Tempestade</option>
                <option value="SOL_COM_NUVENS">Sol com nuvens</option>
              </select>
            </div>

            <div className={styles.content_input}>
              <label htmlFor="">Turno</label>
              <select name="select">
                <option value="DIA" selected>Manhã</option>
                <option value="NOITE">Noite</option>
              </select>
            </div>
          </div>

          <div className={styles.coluna}>
            <label htmlFor="">Temperatura máxima</label>
            <input type="number" name="temperaturaMaxima" id="" />
            <label htmlFor="">Precipitação</label>
            <input type="number" name="precipitacao" id="" />
            <label htmlFor="">Humidade</label>
            <input type="number" name="humidade" id="" />
          </div>

          <div className={styles.coluna}>
            <label htmlFor="">Temperatura mínima</label>
            <input type="number" name="temperaturaMinima" id="" />
            <label htmlFor="">Velocidade do vento</label>
            <input type="number" name="velocidadeDoVento" id="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
