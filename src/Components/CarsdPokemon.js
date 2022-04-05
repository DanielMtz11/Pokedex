import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'


const CarsdPokemon = ({pokemonUrl}) => {

    const [Pokemon, setPokemon]= useState({})


    // console.log( `types from cards: `)
    // console.log(types)

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(r=> {setPokemon(r.data)
                    })

    },[pokemonUrl])
    // console.log(Pokemon)   


    
    
    
    const type = Pokemon?.types?.[0].type?.name;
            
        // console.log(typeof(type));
        // console.log(`type: ${type}`);
        
        const style ={
                    background: type==='normal'?
                            (
                                "red"
                            ):(    
                                type ==='fighting'?
                                (
                                    "blue"
                                ):(
                                    type ==='flying'?
                                    (
                                        "green"
                                    ):(
                                        type === 'poison'?(
                                            "black"
                                        ):(
                                            type === 'fire'?(
                                                "orange"
                                            ):(
                                                type ==='ground'?(
                                                    "purple"
                                                ):(
                                                    type ==='rock'?(
                                                        "yellow"
                                                    ):(
                                                        type ==='bug'?(
                                                            "whitesmoke"
                                                        ):(
                                                            type ==='ghost'?(
                                                                "gray"
                                                            ):(
                                                                type === 'steel'?(
                                                                    "gray"
                                                                ):(
                                                                    type === 'whater'?(
                                                                        "gray"
                                                                    ):(
                                                                        type  === 'grass'?(
                                                                            "gray"
                                                                        ):(
                                                                            type === 'electric'?(
                                                                                "green"
                                                                            ):(
                                                                            type === 'psychic'?(
                                                                                "gray"
                                                                            ):(
                                                                                type ==='ice'?(
                                                                                "gray"
                                                                                ):(
                                                                                    type === 'dragon'?(
                                                                                        "gray"
                                                                                    ):(
                                                                                        type === 'dark'?(
                                                                                            "gray"
                                                                                        ):(
                                                                                            type === 'fairy'?(
                                                                                                "yellow"
                                                                                            ):(
                                                                                                "dark"
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


        console.log(Pokemon);


        // Pokemon.types?.map(type =>{
        //     // console.log(type.type?.name)
        // })
        return (
            <>

                
                {
                    
                    
                    <Link to ={`/Pokedex/${Pokemon.name}`} >
                    
                    <section className='container-card' >
                    <div className='cardPokemon' style={style} >

                        <div className='card-fond'>

                        </div>

                        <div className='card-content'>
                                    <img className='Pokedex-img' src={Pokemon?.sprites?.other?.home.front_default} alt="" />

                    
                                    <h2 className='name'>{Pokemon.name}</h2>
                                    
                                    <ul className='types-ul'>
                                            
                                        {Pokemon.types?.map(type =>(
                                            
                                            <li key={type.type?.url}>{type.type?.name}  </li>
                                            
                                            ))}
                                            {/* types */}
                                        
                                    </ul>
                                    <p>type</p>
                    
                                    <section className='section-stats'>
                                            <p><span>hP</span> <br />
                                                {Pokemon.stats?.[0].base_stat}
                                            </p>
                                            
                                            <p><span>attack</span><br />
                                                {Pokemon.stats?.[1].base_stat}
                                            </p>
                    
                                            <p><span>defense</span> <br />
                                                {Pokemon.stats?.[2].base_stat}
                                            </p>
                    
                                            <p><span>speed</span> <br />
                                                {Pokemon.stats?.[5].base_stat}
                                            </p>
                                    </section> 
                            </div>
       
                    </div>
                    </section>

                    </Link>
                }
            </>
        );
    // }
};

export default CarsdPokemon;