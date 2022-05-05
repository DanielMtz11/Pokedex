// useState es un Hook que te permite añadir el estado de React a un componente de función.
//useEffect permite realizar efectos secundarios en los componentes.
import {React, useEffect, useState } from 'react';

import axios from 'axios';

import CardsBackground from '../Utilities/CardsBackground';
import CardsColor from '../Utilities/CardsColor';

// useParams devuelve un objeto de pares clave/valor de parámetros de URL.
import{ useParams, useNavigate} from 'react-router-dom';
import {useSelector, } from 'react-redux';
import Footer from './Footer';
import pokeball from '../Assets/img/pokeball.png';

const PokedexData = () => {

    const {Name} =useParams();//para acceder al nombre del pokemon proporcionado por el usuario.
    const [pokemon , setPokemon]= useState({});//se inicializa con {}, ya que es un objeto el resultado devuelto del endPoint a consumir.
    
    const [ error, setError]=useState(false);//estado para determinar si ocurrio un error.
    const [isLoading, setIsLoading]= useState(true);//estado para determinar si esta cargando o no.

    
    //para navegar a Pokedex
    const navigate = useNavigate();
    
    //creamos una constante para acceder al valor isDark dentro de la store.
    const isDark = useSelector(state => state.isDark);

//dentro de use efect realizamos la peticion get con el endPoint del nombre del pokemon dado por el usuario.
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}/`)
        .then(r=> {setPokemon(r.data)
                    setIsLoading(false); })
            //si algo sale mal en la promise ejecutamos '.catch' para poder mostrar algo al error.
        .catch( error =>{
                            setError(true);//seteamos el estado 'error' a true.
                            console.log(error);
                        } )
        //como dependencia tenemos al nombre, ya que cada vez que el usuario escriba en el input se realizara dicha petecion.
    },[Name])

    // si el usuario ingresa un nombre invalido se ejecuta error.   
        if(error){
            return (
                <div className='Error' style={{color:isDark? "whitesmoke":"black"}}>
                    <p>Something went wrong </p>
                    <span className='Error__404'>
                        4<img src={pokeball} alt="" />4
                    </span>
                    <p>Pokemon not found </p>
                    <button className='Error__btn' onClick={()=> navigate(`/pokedex/`)} > Back Home</button>
                </div>
            
            )
        }

    // si no, se mostrara la pantalla de carga hasta que sean cargados todos los datos.  
        else if(isLoading){
                return(
                    <div className='Loading' style={{background: isDark? "#241d1d": "linear-gradient(180deg, rgba(191,191,191,1) 0%, rgba(80,78,78,1) 99%)", color:isDark? "whitesmoke":"dark"}}>

                    <p>Loading...</p>
                    </div>
                )
            }
            

    //almacenamos el tipo de pokemon dentro de una variable para despues poder manipular los colores.
    const type = pokemon?.types?.[0].type?.name;
   
        return (
            // seteamos el background dependiendo del estado de 'isDark'.
            <div  className='PokedexData' style={{background:isDark? "#241d1d":"whitesmoke" }}>

                <section className='PokedexData__background'  style={{background: CardsBackground(type)}} >
                    <p style={{background: CardsBackground(type)}} className='id'>#{pokemon.id}</p>
                </section >

                {/* // seteamos el color de fuente dependiendo del estado de 'isDark'. */}
                <section className='PokedexData__content' style={{color:isDark? "whitesmoke": "dark"}}>
                    
                    <div className='PokedexData__containerImg' >
                        <img src={pokemon?.sprites?.other?.home.front_default} alt="" />
                    </div>
                    
                    <h2 style={{color: CardsColor(type)}}>{pokemon.name}</h2>

                    <div className='PokedexData__types'>   
                    {/* //realizamoms un map a pokemon.types para obtener los diferentes tipos de este pokemon.   */}
                        {pokemon.types?.map(type =>(
                            <h3 style={{background: CardsBackground(type.type.name)}}
                            
                            key={type.type.url}>{type.type.name}</h3>
                            ))}
                    </div>

                    <div className='PokedexData__paragraphs'>
                        <p>{pokemon.height/10}M <br /> <span> height</span> </p>
                        <p> {pokemon.weight/10}Kg <br /><span> Weight</span></p>
                    </div>
                            
                    <section className='PokedexData__stats'>
                        <p className='PokedexData__stat1 PokedexData__stat1--gap'><span>hP </span> 
                            <progress  max="170" value={pokemon.stats?.[0].base_stat}></progress>                            
                        </p>

                        <p className='PokedexData__stat2' ><span>atk</span>
                            <progress  max="170" value={pokemon.stats?.[1].base_stat}></progress>                            
                        </p>
                        
                        <p className='PokedexData__stat3' ><span>def</span> 
                            <progress max="170" value= {pokemon.stats?.[2].base_stat}></progress>
                        </p>

                        <p className='PokedexData__stat4' ><span>spd</span>                                            
                            <progress max="170" value= {pokemon.stats?.[5].base_stat}></progress>
                        </p>
                    </section> 


                    <div className='PokedexData__abilities'>
                        <p >Abilities</p>
                        <ul className='PokedexData__listAbilities'>
                        {/* //realizamoms un map a pokemon.abilities para obtener las habilidades de este pokemon.   */}
                            {
                                pokemon.abilities?.map( ability =>(
                                <li key={ability.ability.name}>{ability.ability?.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <Footer/>
                </section>
            </div>

        );
    
    
    
};

export default PokedexData;