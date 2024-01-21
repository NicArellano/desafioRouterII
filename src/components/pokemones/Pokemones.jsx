import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Pokemones = () => {
  //estados
  const [pokeName, setPokeName] = useState("");
  const [pokemones, setPokemones] = useState([]);
 

  const navigate = useNavigate();
  const goPokeDetails = () => {
    navigate(`${pokeName}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await response.json();
        setPokemones(data.results);
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="pokemones">
      <h1>Selecciona un Pokemon</h1>
      <select
        value={pokeName}
        onChange={({ target }) => setPokeName(target.value)}
      >
        {pokemones.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

     

      <button onClick={goPokeDetails} >Ver detalles</button>
    </div>
  );
};

export default Pokemones;
