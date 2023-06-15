import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBar = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const results = response.data.results;
      const pokemonPromises = results.map((pokemon) =>
        axios.get(pokemon.url)
      );
      const responses = await Promise.all(pokemonPromises);
      const pokemonData = responses.map((res) => res.data);
      setPokemons(pokemonData);
    };

    fetchData();
  }, []);

  return (
    <div className="userbar">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <div className="pokemon-details">
            <div>
              <span className="pokemon-label">Height:</span> {pokemon.height}
            </div>
            <div>
              <span className="pokemon-label">Weight:</span> {pokemon.weight}
            </div>
            <div>
              <span className="pokemon-label">Type:</span> {pokemon.types.map((type) => type.type.name).join(', ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBar;
