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
    const [active, setActive] = useState(false)

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
    }, [offset])
    
    useEffect(() => {
        getGlobalPOkemons()
    }, [])

    //Button more pokemons

    const onClickLoadMore = () =>{
        setOffset(offset + 50)
    }

    //Filter and state

    const [typeSelected, setTypeSelected] =  useState ({
        grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
    })

     const [ filteredPokemons, setfilteredPokemons] = useState([])

    const handleCheckbox = e => {

        setTypeSelected ({
            ...typeSelected, 
            [e.target.name]: e.target.checked
        })


        if(e.target.checked){
            const filteredResults = globalPokemons.filter(pokemon => 
                pokemon.types.map(type => type.type.name).includes(e.target.name)

            )
            console.log(filteredResults)
        }

    }





    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm, 
            allPokemons, 
            globalPokemons,
            onClickLoadMore,
            getPokemonByID: getAllPokemonById,
            //Loader
            loading, 
            setloading, 
            //Button filter
            active, 
            setActive,
            //Filter container
            handleCheckbox, 
            filteredPokemons


        }}>
            {children}
        </PokemonContext.Provider>
    )
}