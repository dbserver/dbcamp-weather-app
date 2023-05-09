export default interface MeteriologicalData { 
    id: number;
    cidade: string;
    data: string;
    tempo: string;
    turno: string;
    temperaturaMaxima: number;
    temperaturaMinima: number;
    precipitacao: number; 
    umidade: number; 
    velocidadeVentos: number;
  }