import React from 'react';
import{ useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import pokeball from '../img/pokeball.png';
import Footer from './Footer';



const PokedexData = () => {


    const { Name } =useParams();

    const [pokemon , setPokemon]= useState({})

    const isDark = useSelector(state => state.isDark);

    const [ error, setError]=useState(false);

    const [isLoading, setIsLoading]= useState(true);

    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}/`)
        .then(r=> {setPokemon(r.data)
                    setIsLoading(false) })
        .catch( error =>{
                setError(true)
                console.log(error)
            // <p>
            //     UPS SOMETIME WAS WRONT {error}
            // </p>
        }
                // console.log("ERROR")
                
            )

    },[Name])

    const type = pokemon?.types?.[0].type?.name;
    // const type2 = pokemon?.types?.[1].type?.name;

                    // console.log(error)

    const style ={
        background: type==='normal'  ?
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
                            type === 'poison' ?(
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
                                                            type  === 'grass' ?(
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

    
if(error){
    return (

    <div className='Error' style={{color:isDark? "whitesmoke":"black"}}>

        <p>Something went wrong </p>
        

        <span className='Error__404'>
            4<img src={pokeball} alt="" />4
        </span>
        {/* <p>{error}</p> */}
        <p>Pokemon not found </p>


        <button className='Error__btn' onClick={()=> navigate(`/pokedex/`)} > Back Home</button>
    </div>
    
    )
}

else if(isLoading){
        return(
            <div className='Loading' style={{background: isDark? "#241d1d": "linear-gradient(180deg, rgba(191,191,191,1) 0%, rgba(80,78,78,1) 99%)", color:isDark? "whitesmoke":"dark"}}>

            <p>Loading...</p>
            </div>
        )
    }
    
        return (
            <>            
            
            <div  className='PokedexData' style={{background:isDark? "#241d1d":"whitesmoke" }}>
                <section className='PokedexData__background' style={style} >
                <p style={style} className='id'>#{pokemon.id}</p>

                </section >
                    
                <section className='PokedexData__content' style={{color:isDark? "whitesmoke": "dark"}}>
                    
                    <div className='PokedexData__containerImg' >
                        <img src={pokemon?.sprites?.other?.home.front_default} alt="" />
                    </div>
                        <h2>{pokemon.name}</h2>

                    <div className='PokedexData__types'>
                        {pokemon.types?.map(type =>(
                            
                            <h3 style={{background:type.type.name === 'grass'?( "linear-gradient(156deg, rgba(32,89,125,0.9304096638655462) 19%, rgba(15,245,184,0.6951155462184874) 83%)"):(
                                        type.type.name === 'poison'?("linear-gradient(293deg, rgba(46,29,55,1) 0%, rgba(165,56,184,0.908000700280112) 100%) "):(
                                            type.type.name === 'normal'?( "linear-gradient(212deg, rgba(27,10,9,0.6867121848739496) 10%, rgba(255,239,147,1) 99%)"):(
                                                type.type.name === 'fighting'?("linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,30,13,1) 0%, rgba(187,65,24,0.908000700280112) 85%)"):(
                                                    type.type.name === 'flying'?("linear-gradient(135deg, rgba(215,44,79,1) 19%, rgba(0,38,223,0.6951155462184874) 83%)"):(
                                                        type.type.name === 'fire'?( "linear-gradient(212deg, rgba(253,29,29,1) 9%, rgba(252,176,69,1) 100%)"):(
                                                            type.type.name === 'ground'?("linear-gradient(0deg, rgba(168,135,41,1) 0%, rgba(55,43,9,0.908000700280112) 83%)"):(
                                                                type.type.name ==='rock'?("linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(156,156,156,1) 84%, rgba(185,185,185,1) 99%)"):(
                                                                    type.type.name === 'bug'?("linear-gradient(90deg, rgba(37,68,34,1) 0%, rgba(88,184,56,0.908000700280112) 100%)"):(
                                                                        type.type.name === 'ghost'?("linear-gradient(0deg, rgba(12,35,230,0.8155637254901961) 12%, rgba(31,1,50,1) 99%)"):(
                                                                            type.type.name === 'steel'?(" linear-gradient(57deg, rgba(171,189,204,1) 15%, rgba(24,49,65,1) 97%)"):(
                                                                                type.type.name === 'water'?("linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"):(
                                                                                    type.type.name === 'electric'?("linear-gradient(333deg, rgba(12,37,59,1) 15%, rgba(19,131,204,1) 97%)"):(
                                                                                        type.type.name === 'psychic'?("linear-gradient(63deg, rgba(247,231,147,0.9304096638655462) 19%, rgba(116,86,0,1) 97%)"):(
                                                                                            type.type.name === 'ice'?("linear-gradient(63deg, rgba(11,56,84,0.9304096638655462) 19%, rgba(0,116,85,1) 97%)"):(
                                                                                                type.type.name === 'dragon'?("linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"):(
                                                                                                    type.type.name === 'dark'?("linear-gradient(71deg, rgba(111,111,111,1) 16%, rgba(101,104,106,1) 19%, rgba(0,0,0,1) 97%)"):(
                                                                                                        type.type.name === 'fairy'?(" linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)"):(
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
                            }}
                            
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
                                    {
                                        pokemon.abilities?.map( ability =>(
                                        <li key={ability.ability.name}>{ability.ability?.name}</li>
                                        // console.log( ability.ability.name)
                                        ))
                                        
                                    }
                                </ul>
                            </div>

                            
                            <Footer/>
                        </section>
            </div>

            </>
        );
    
    
    
};

export default PokedexData;