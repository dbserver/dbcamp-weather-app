import { MeteorologicalService } from "../../services/api/meteorogical";
import { useEffect, useState } from "react";

export default function Home() {
  const [meteorologicalRegisterList, setMeteorologicalRegisterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await MeteorologicalService.getALL();
      setMeteorologicalRegisterList(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {meteorologicalRegisterList.map((item: any) => (
        <div key={item.id}>
          <h1>{item.cidade}</h1>
          <h2>{item.tempo}</h2>
          <p>{item.turno}</p>
        </div>
      ))}
    </div>
  );
}
