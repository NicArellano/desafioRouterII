import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate, useParams } from 'react-router-dom'


const PokemonDetails = () => {
const navigate = useNavigate()
const volverPokemones = () => {
    navigate("/pokemones")
}

const {name} = useParams()
const [pokemon, setPokemon] = useState({})
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
        <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={pokemon.sprites.front_default}  /> */}
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
         {}
        </Card.Text>
        <Button variant="primary" onClick={volverPokemones}>Go Pokemones</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default PokemonDetails