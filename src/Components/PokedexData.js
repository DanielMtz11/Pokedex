import React from 'react';
import{ useParams} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const PokedexData = () => {
    const { Name } =useParams();


    const [pokemon , setPokemon]= useState({})


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}/`)
        .then(r=> setPokemon(r.data))

    },[Name])


        console.log(pokemon)



    return (
        <div>
                <p>pokedex Info</p>
                
                    <p>{pokemon.name}</p>
                        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                   
                    <section>abilities:
                    <p> {pokemon.abilities?.[0].ability.name}</p>
                    <p>{pokemon.abilities?.[1].ability.name}</p>

                    </section>

                    <p>height: {pokemon.height}</p>
                    <p>weight: {pokemon.weight}</p>


                    {/* <div>types:
                    <p> {pokemon?.types?.[0].type?.name}</p>
                    <p> {pokemon?.types?.[1].type?.name}</p>
                        
                    </div> */}

                    <div>Movements
                        <ul>

                        {
                            pokemon.moves?.map(move=>
                                <li key={move?.move?.name}>
                                    {move?.move?.name}
                                </li>
                                // console.log(move.move.name)
                                // console.log(move?.name)
                                )
                            }

                            </ul>
                    </div>

                    
                


        </div>
    );
};

export default PokedexData;