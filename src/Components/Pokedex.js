import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import CarsdPokemon from './CarsdPokemon';
import {useNavigate} from 'react-router-dom'

const Pokedex = () => {
    const [Pokemons, setPokemons]= useState(null)


    const Navigate = useNavigate();


    const[NameOrId, setNameOrId] = useState("")
    // console.log(Pokemons)
    const userName = useSelector(state => state.userName)

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then(r => {setPokemons(r.data.results)})

    },[])


    const Submit=(e)=>{

        e.preventDefault();
        // console.log(NameOrId);
        Navigate(`/pokedex/${NameOrId}`)
    }




    return (
        <>
                <p className='pokedex'>Pokedex</p>
                <p className='welcome'>welcome <span>{userName}</span> </p>


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
                        
                    <CarsdPokemon key={pokemon.url} pokemonUrl={pokemon.url}/>
                        
                
                    ))
                }

                        </ul>
        </>
    );
};

export default Pokedex;