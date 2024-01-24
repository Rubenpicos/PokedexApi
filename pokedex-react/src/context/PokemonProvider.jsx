import { useEffect, useState } from "react"
import { PokemonContext } from "./pokemonContext"


export const PokedemonProvider = ({children}) => {

    const [offset, setOffset] = useState(0) 


    //50th first Pokemon
    const getAllPokemon = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        console.log(data)

    }


    useEffect(() =>{
       getAllPokemon()
        
    }, [])


    return(
        <PokemonContext.Provider value= {{
            numero: 0
        }}> 
            {children}
        </PokemonContext.Provider>
    )
}