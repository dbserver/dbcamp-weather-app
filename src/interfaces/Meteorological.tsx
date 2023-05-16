export default interface MeteriologicalData { 
    id: number;
    cidade: string;
    data: string;
    tempoDia: string;
    tempoNoite: string;
    temperaturaMaxima: number;
    temperaturaMinima: number;
    precipitacao: number; 
    umidade: number; 
    velocidadeVentos: number;
  }