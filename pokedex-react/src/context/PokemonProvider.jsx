import { useEffect, useState } from "react"
import { PokemonContext } from "./pokemonContext"
import { useForm } from "../hook/useForm";


export const PokedemonProvider = ({ children }) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setglobalPokemons] = useState([])
    const [offset, setOffset] = useState(0);
    
    
    //Use Custom Hook
        const {valueSearch, onInputChange, onResetForm} = useForm({
            valueSearch: ''
        })


    // Simple states for the app
    const [loading, setloading] = useState(true)
    const [active, setactive] = useState(false)

    //50th first Pokemon
    const getAllPokemon = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);

        const data = await res.json();
        const promise = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data
        })
        const results = await Promise.all(promise);

        setAllPokemons([...allPokemons, ...results]);
        setloading(false);
    }


    // All Pokemon

    const getGlobalPOkemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        const promise = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promise)

        setglobalPokemons(results);
        setloading(false)
    }

    //Pokemon for Id


    const getAllPokemonById = async (id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    }


    useEffect(() => {
        getAllPokemon()
    }, [])
    
    useEffect(() => {
        getGlobalPOkemons()
    }, [])



    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm, 
            allPokemons, 
            globalPokemons,
            // Cambia el nombre de la función aquí
            getPokemonByID: getAllPokemonById
        }}>
            {children}
        </PokemonContext.Provider>
    )
}