import axios from 'axios'//para consumir la Api.
import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'//para navegar a PokedexData
import CardsBackground from '../Utilities/CardsBackground';


// como prop le pasamos pokemonUrl, proveniente desde el componente 'Pokedex'
const CarsdPokemon = ({pokemonUrl}) => {

    const [Pokemon, setPokemon]= useState({});//se inicializa con {}, ya que es un objeto el resultado devuelto del endPoint a consumir.

    //dentro de use efect realizamos la peticion get pasandole como endPoint 'pokemonUrl'
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(r=> { setPokemon(r.data);
                    })
        //como dependencia tenemos a 'pokemonUrl', ya que se ejecutara la peticion cada vez que la url sea diferente.
    },[pokemonUrl])


    
    //accedemos al tipo de pokemon para despues cambiar el background dependiendo del tipo.
    const type = Pokemon?.types?.[0].type?.name;
            

        
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
                                                                "linear-gradient(0deg, rgba(12,35,230,0.8155637254901961) 12%, rgba(31,1,50,1) 99%)"
                                                            ):(
                                                                type === 'steel'?(
                                                                    " linear-gradient(57deg, rgba(171,189,204,1) 15%, rgba(24,49,65,1) 97%)"
                                                                ):(
                                                                    type === 'water'?(
                                                                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"
                                                                    ):(
                                                                        type  === 'grass'?(
                                                                            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"
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
                                                                "#0b3854"
                                                            ):(
                                                                type  === 'grass'?(
                                                                    "#416460"
                                                                    
                                                                ):(
                                                                    type === 'electric'?(
                                                                    
                                                                        "#153755"
                                                                    ):(
                                                                    type === 'psychic'?(
                                                                        "#ad6a21"
                                                                    ):(
                                                                        type ==='ice'?(
                                                                        "#007455"
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



        return (
            <>
                {
                    // navegamos hacia el componente PokedexData
                    <Link to ={`/Pokedex/${Pokemon.name}`} >             
                        <section className='Card '  style={{background: CardsBackground(type)}} >
                            <div className='Card__pokemon ' style={style} >

                            <div className='Card__background'></div>

                            <div className='Card__content'>
                                <img src={Pokemon?.sprites?.other?.home.front_default} alt="" />

                                <h2 style={styleColor} className='name'>{Pokemon.name}</h2>
                                
                                <ul className='Card__types'>
                                    {Pokemon.types?.map(type =>(  
                                        <li key={type.type?.url}>{type.type?.name}  </li>
                                        ))}
                                </ul>

                                <p>type</p>
                
                                <section className='Card__stats'>
                                    <p style={styleColor}><span>h.Power</span> <br />
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
};

export default CarsdPokemon;