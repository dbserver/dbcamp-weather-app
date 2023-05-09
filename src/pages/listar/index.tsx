import { useState, useEffect } from "react";
import { MeteorologicalService } from "../../services/api/meteorogical";
import MeteriologicalData from "../../interfaces/Meteorological";

export default function Listar () {
  const [meteorologicalRegisterList, setMeteorologicalRegisterList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await MeteorologicalService.getALL();
      setMeteorologicalRegisterList(result);
    };
    fetchData();
  }, []);

  return(
    <h1>hello list</h1>
    //  <div>
    //   {meteorologicalRegisterList.map((item: MeteriologicalData ) => (
    //     <div key={item.id}>
    //       <h1>{item.cidade}</h1>
    //       <h2>{item.tempo}</h2>
    //       <p>{item.turno}</p>
    //     </div>
    //   ))}
    // </div>
    
  )
}