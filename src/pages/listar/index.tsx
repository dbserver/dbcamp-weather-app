import { useState, useEffect } from "react";
import { MeteorologicalService } from "../../services/api/meteorogical";
import MeteriologicalData from "../../interfaces/Meteorological";

export default function Listar () {
  const [dataCityList, setDataCityList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await MeteorologicalService.getByCity("salvador");
      setDataCityList(result);
    };
    fetchData();
  }, []);

  return(
     <div>
      {dataCityList.map((item: MeteriologicalData ) => (
        <div key={item.id}>
          <h1>{item.cidade}</h1>
          <h2>{item.data}</h2>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
    
  )
}