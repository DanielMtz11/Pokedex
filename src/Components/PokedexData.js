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

    const type = pokemon?.types?.[0].type?.name;

    
    const style ={
        background: type==='normal'?
                (
                    "linear-gradient(212deg, rgba(27,10,9,0.6867121848739496) 10%, rgba(255,239,147,1) 99%)"
                ):(    
                    type ==='fighting'?
                    (
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,30,13,1) 0%, rgba(187,65,24,0.908000700280112) 85%)"
                        
                    ):(
                        type ==='flying'?
                        (
                            "green"
                        ):(
                            type === 'poison'?(
                                "linear-gradient(293deg, rgba(46,29,55,1) 0%, rgba(165,56,184,0.908000700280112) 100%) "
                            ):(
                                type === 'fire'?(
                                    "linear-gradient(212deg, rgba(253,29,29,1) 9%, rgba(252,176,69,1) 100%)"

                                ):(
                                    type ==='ground'?(
                                        "linear-gradient(0deg, rgba(168,135,41,1) 0%, rgba(55,43,9,0.908000700280112) 83%)"

                                    ):(
                                        type ==='rock'?(
                                            "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(156,156,156,1) 84%, rgba(185,185,185,1) 99%)"
                                            
                                        ):(
                                            type ==='bug'?(
                                                "linear-gradient(90deg, rgba(37,68,34,1) 0%, rgba(88,184,56,0.908000700280112) 100%)"
                                            ):(
                                                type ==='ghost'?(
                                                    // "linear-gradient(0deg, rgba(12,119,230,0.8155637254901961) 12%, rgba(1,2,50,1) 99%)"
                                                    "linear-gradient(0deg, rgba(12,35,230,0.8155637254901961) 12%, rgba(31,1,50,1) 99%)"
                                                    
                                                ):(
                                                    type === 'steel'?(
                                                        " linear-gradient(57deg, rgba(171,189,204,1) 15%, rgba(24,49,65,1) 97%)"
                                                        

                                                    ):(
                                                        type === 'water'?(
                                                            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"
                                                            
                                                        ):(
                                                            type  === 'grass'?(
                                                                "linear-gradient(156deg, rgba(32,89,125,0.9304096638655462) 19%, rgba(15,245,184,0.6951155462184874) 83%)"
                                                            ):(
                                                                type === 'electric'?(
                                                                    "linear-gradient(333deg, rgba(12,37,59,1) 15%, rgba(19,131,204,1) 97%)"
                                                                ):(
                                                                type === 'psychic'?(
                                                                    "linear-gradient(63deg, rgba(247,231,147,0.9304096638655462) 19%, rgba(116,86,0,1) 97%)"
                                                                ):(
                                                                    type ==='ice'?(
                                                                    "linear-gradient(63deg, rgba(11,56,84,0.9304096638655462) 19%, rgba(0,116,85,1) 97%)"
                                                                    ):(
                                                                        type === 'dragon'?(
                                                                            "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"

                                                                        ):(
                                                                            type === 'dark'?(
                                                                                "linear-gradient(71deg, rgba(111,111,111,1) 16%, rgba(101,104,106,1) 19%, rgba(0,0,0,1) 97%)"
                                                                            ):(
                                                                                type === 'fairy'?(
                                                                                    " linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)"
                                                                                    
                                                                                ):(
                                                                                    "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
                                                                                )
                                                                            )

                                                                        )
                                                                    )
                                                                )
                                                                
                                                                )
                                                            )

                                                        )

                                                    )

                                                )
                                            )
                                        )

                                
                                    )
            
                                )

                            )
                )
            )
        )


}

    

        console.log(pokemon)



    return (
        <div className='container-pokedexData'>
            <section style={style} className='fond-pokedexData'>

            </section >
                
            <section className='content-pokedexData'>
                <p className='id'>#{pokemon.id}</p>
                <div className='container-imgData'>
                    {/* <img className='pokedexData-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" /> */}
                    <img className='pokedexData-img' src={pokemon?.sprites?.other?.home.front_default} alt="" />
                </div>
                    <h2>{pokemon.name}</h2>

                    {pokemon.types?.map(type =>(
                        <h3 key={type.type.url}>{type.type.name}</h3>
                        // console.log(type.type.name)
                    ))}

                    <section className='content-pokedexData-abilities'>
                        abilities:
                    <p> {pokemon.abilities?.[0].ability.name}</p>
                    <p>{pokemon.abilities?.[1].ability.name}</p>

                    </section>

                    <p>height: {pokemon.height}</p>
                    <p>weight: {pokemon.weight}</p>


                    {/* <div>types:
                    <p> {pokemon?.types?.[0].type?.name}</p>
                    <p> {pokemon?.types?.[1].type?.name}</p>
                        
                    </div> */}

                    {/* <div>Movements
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
                    </div> */}
                                </section>


                    
                


        </div>
    );
};

export default PokedexData;