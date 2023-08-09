"use client"
import { useEffect, useState } from "react"
import PokemonList from "../../components/pokemonlists/page";
import { Pokemon } from "../../type";

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const pokemonList = data.results.map((pokemon : Pokemon) => {
          const id = pokemon.url.split("/")[6];
          return {
            id: id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        })
        setPokemons(pokemonList);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching poke data ni")
        setLoading(false)
      }
    }
    fetchPokemons()
  }, [])


  return (
  <>
    {loading? <p className="text-center">Loading...</p> : <PokemonList pokemons={pokemons} />}
</>
    )
}
