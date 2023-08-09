import React from 'react';
import { Pokemon } from '../../type';
import Link from 'next/link';

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">Pokemon List Pake NEXT JS 13</h2>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6 mx-2'>
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.id}
              className="border-4 rounded p-4 flex flex-col items-center justify-end">
              <Link href={`/pokemon/${pokemon.name}`}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-32 h-32 object-contain mb-2"
              />
              <span>{pokemon.name}</span>
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonList;
