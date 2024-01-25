import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loaders } from "./Loader";


export const PokemonList = () => {
       
    const {allPokemons, loading} = useContext(PokemonContext)
    

    
    return (
        <>

            {
                loading ? (
                    <Loaders />
                ):
                <div className="card-list-pokemon container">

                {allPokemons.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id}/>
                ))}
            </div>
            }
            
        
        
        
        </>
    )
}
