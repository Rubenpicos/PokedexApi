import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";

export const SeachPage = () => {
  const location = useLocation();

  console.log(location);

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase()),
  );

  console.log(filteredPokemons);

  return (
    <div className="container">
      <p className="p-search">
        Se encontraro <span>{filteredPokemons.length}</span> resultados:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
