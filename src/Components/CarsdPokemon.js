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
                                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(153,110,8,0.8379726890756303) 91%)"
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
                                                "linear-gradient(0deg, rgba(230,88,12,0.8155637254901961) 32%, rgba(246,20,0,1) 99%)"

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
                                                                            "linear-gradient(178.92deg, #7EC6C5 90.92%, #ABDAC6 7.96%, #CAE099 0.08%)"
                                                                        ):(
                                                                            type === 'electric'?(
                                                                                "linear-gradient(333deg, rgba(12,37,59,1) 15%, rgba(19,131,204,1) 97%)"
                                                                            ):(
                                                                            type === 'psychic'?(
                                                                                "linear-gradient(63deg, rgba(247,231,147,0.9304096638655462) 19%, rgba(116,86,0,1) 97%)"
                                                                            ):(
                                                                                type ==='ice'?(
                                                                                "  linear-gradient(71deg, rgba(98,172,222,1) 19%, rgba(36,23,138,1) 97%)"
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

        const styleColor={
            color: type==='normal'?
                    (
                        "#543c03"                    
                    ):(    
                        type ==='fighting'?
                        (
                            "#96402A"
                        ):(
                            type ==='flying'?
                            (
                                "green"
                            ):(
                                type === 'poison'?(
                                    "#5B3184"
                                ):(
                                    type === 'fire'?(
                                        "#E75C35"
                                    ):(
                                        type ==='ground'?(
                                            "#654008"
                                        ):(
                                            type ==='rock'?(
                                                "#7E7E7E"
                                            ):(
                                                type ==='bug'?(
                                                    "#4AB648"
                                                ):(
                                                    type ==='ghost'?(
                                                        "#323569"
                                                    ):(
                                                        type === 'steel'?(
                                                            "#5E736C"
                                                        ):(
                                                            type === 'water'?(
                                                                "#1479FB"
                                                            ):(
                                                                type  === 'grass'?(
                                                                    "#416460"
                                                                    
                                                                ):(
                                                                    type === 'electric'?(
                                                                       
                                                                        "#153755"
                                                                    ):(
                                                                    type === 'psychic'?(
                                                                        "gray"
                                                                    ):(
                                                                        type ==='ice'?(
                                                                        "#6FBEDF"
                                                                        ):(
                                                                            type === 'dragon'?(
                                                                                "#478A93"
                                                                            ):(
                                                                                type === 'dark'?(
                                                                                    "#030706"
                                                                                ):(
                                                                                    type === 'fairy'?(
                                                                                        "#971B45"
                                                                                    ):(
                                                                                        "#030706"

                                                                                        
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
                    
                    <section className='container-card' style={style} >
                    <div className='cardPokemon' style={style} >

                        <div className='card-fond'>

                        </div>

                        <div className='card-content'>
                                    <img className='Pokedex-img' src={Pokemon?.sprites?.other?.home.front_default} alt="" />

                    
                                    <h2 style={styleColor} className='name'>{Pokemon.name}</h2>
                                    
                                    <ul className='types-ul'>
                                            
                                        {Pokemon.types?.map(type =>(
                                            
                                            <li key={type.type?.url}>{type.type?.name}  </li>
                                            
                                            ))}
                                            {/* types */}
                                        
                                    </ul>
                                    <p>type</p>
                    
                                    <section className='section-stats'>
                                            <p style={styleColor}><span>hP</span> <br />
                                                {Pokemon.stats?.[0].base_stat}
                                            </p>
                                            
                                            <p style={styleColor}><span>attack</span><br />
                                                {Pokemon.stats?.[1].base_stat}
                                            </p>
                    
                                            <p style={styleColor}><span>defense</span> <br />
                                                {Pokemon.stats?.[2].base_stat}
                                            </p>
                    
                                            <p style={styleColor}><span>speed</span> <br />
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