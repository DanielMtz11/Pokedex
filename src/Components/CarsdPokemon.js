import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'


const CarsdPokemon = ({pokemonUrl}) => {

    const [Pokemon, setPokemon]= useState({})

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(r=> {setPokemon(r.data)
                    })

    },[pokemonUrl])
    console.log(Pokemon)   


    
    
    return (
        <>
            {
                    <Link to ={`/Pokedex/${Pokemon.name}`} >
                <div className='cardPokemon' >

                <p className='id'>{Pokemon.id}</p>
                <h2 className='name'>{Pokemon.name}</h2>
                <p>type: {Pokemon.types?.[0].type?.name}</p>
                <img className='img' src={Pokemon.sprites?.front_default} alt="" />

                <section className='section'>
                        <p>attack:
                            {Pokemon.stats?.[1].base_stat}
                        </p>

                        <p>Defense:
                            {Pokemon.stats?.[2].base_stat}
                        </p>

                        <p>speed:
                            {Pokemon.stats?.[5].base_stat}
                        </p>
                </section>        
                </div>
                </Link>
            }
        </>
    );
};

export default CarsdPokemon;