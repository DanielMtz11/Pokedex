import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import CarsdPokemon from './CarsdPokemon';
import {useNavigate} from 'react-router-dom'

const Pokedex = () => {
    const [Pokemons, setPokemons]= useState(null) //para almacenar los pokemons consumidos
    const [types, setTypes]= useState([]);


    const Navigate = useNavigate();


    const[NameOrId, setNameOrId] = useState("")
    // console.log(Pokemons)
    const userName = useSelector(state => state.userName)

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then(r => {
                    setPokemons(r.data.results)
                    console.log("POKemons:")
                    console.log(r.data.results)
                    })


        axios.get("https://pokeapi.co/api/v2/type/")
        .then(r => setTypes(r.data.results))

    },[])


    console.log(types)

    const Submit=(e)=>{

        e.preventDefault();
        // console.log(NameOrId);
        Navigate(`/pokedex/${NameOrId}`)
    }



    const handleSelect=(e)=>{

        let urlTypes = e.target.value
        axios.get(urlTypes)
        .then(r => {
            console.log("types..>");
            setPokemons(r.data?.pokemon);
        
            // r.data.pokemon.map(pokemon => console.log(pokemon.pokemon.url))
        })
        // console.log(e.target.value)

    }

    return (
        <>
                <p className='pokedex'>Pokedex</p>
                <p className='welcome'>welcome <span>{userName}</span> </p>

                <div>
                    <select onChange={handleSelect} name="" id="">
                        {
                            types.map(type =>(
                                
                                <option key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }

                    </select>
                </div>


                <form onSubmit={Submit}>
                    <label htmlFor="id/name">Look for Name/Id</label>
                    <input type="text"  id="id/name"
                            onChange={e => setNameOrId(e.target.value)}
                            value={NameOrId}/>
                    <button >Submit</button>

                </form >
                
                    <ul className='containerCard'>

                    
                {
                    Pokemons?.map(pokemon =>(
                        
                    <CarsdPokemon key={pokemon.url?pokemon.url:pokemon.pokemon.url} pokemonUrl={pokemon.url?pokemon.url:pokemon.pokemon.url}/>
                        
                
                    ))
                }

                        </ul>
        </>
    );
};

export default Pokedex;