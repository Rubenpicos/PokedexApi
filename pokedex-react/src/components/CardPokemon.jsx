import React from "react";
import { Link } from "react-router-dom";
// The const to individual card in the API// Constante para cada carta individual de la API
export const CardPokemon = ({ pokemon }) => {
  return (

    //The route and the structure/ La ruta y la estructura. 
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="card-info">
        <span className="pokemon-id">N° {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
