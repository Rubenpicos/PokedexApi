import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loaders } from "./Loader";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
  // All pokemon render im main page// Todos los pokemon renderizados en la págona de inicio
  return (
    <>
      {loading ? (
        <Loaders />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <> 
            {/* If filter have caracteres, load a pokemon//Si el filtro tiene algún caracter, carga un pokemon */}
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
