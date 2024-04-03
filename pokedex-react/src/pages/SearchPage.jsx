import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";

export const SeachPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase()),
  );

  //The search results// Los resultados de las búsquedas.
  return (
    <div className="container">
      <p className="p-search">
        <span>{filteredPokemons.length}</span> Results were found:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
