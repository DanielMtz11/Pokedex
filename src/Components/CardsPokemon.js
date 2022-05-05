import axios from 'axios'//para consumir la Api.
import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'//para navegar a PokedexData
import CardsBackground from '../Utilities/CardsBackground';
import CardsColor from '../Utilities/CardsColor';


// como prop le pasamos pokemonUrl, proveniente desde el componente 'Pokedex'
const CardsPokemon = ({pokemonUrl}) => {

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
            
    return (
        <>
            {
                // navegamos hacia el componente PokedexData
                <Link to ={`/Pokedex/${Pokemon.name}`} >             
                    <section className='Card ' style={{background: CardsBackground(type)}} >
                        <div className='Card__pokemon ' style={{background: CardsBackground(type)}} >

                        <div className='Card__background'></div>

                        <div className='Card__content'>
                            <img src={Pokemon?.sprites?.other?.home.front_default} alt="" />

                            <h2 style={{color: CardsColor(type)}} className='name'>{Pokemon.name}</h2>
                            
                            <ul className='Card__types'>
                                {Pokemon.types?.map(type =>(  
                                    <li key={type.type?.url}>{type.type?.name}  </li>
                                    ))}
                            </ul>

                            <p>type</p>
            
                            <section className='Card__stats'>
                                <p style={{color: CardsColor(type)}}><span>h.Power</span> <br />
                                    {Pokemon.stats?.[0].base_stat}
                                </p>
                                
                                <p style={{color: CardsColor(type)}}><span>attack</span><br />
                                    {Pokemon.stats?.[1].base_stat}
                                </p>
        
                                <p style={{color: CardsColor(type)}}><span>defense</span> <br />
                                    {Pokemon.stats?.[2].base_stat}
                                </p>
        
                                <p style={{color: CardsColor(type)}}><span>speed</span> <br />
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

export default CardsPokemon;