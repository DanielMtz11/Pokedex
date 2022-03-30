import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import CarsdPokemon from './CarsdPokemon';
import {useNavigate} from 'react-router-dom'

const Pokedex = () => {
    const [Pokemons, setPokemons]= useState(null) //para almacenar los pokemons consumidos
    const [types, setTypes]= useState([]);
    const [page, setPage] =useState(1);

    //para navegar a podexData
    const Navigate = useNavigate();


    const[NameOrId, setNameOrId] = useState("")
    // console.log(Pokemons)

    
    const userName = useSelector(state => state.userName)




    
            //* Codigo para la paginacion 
    
            const items= 6;
            const lastIndex = items *page;
            const firstIndex = lastIndex - items;

            const pagination = Pokemons?.slice(firstIndex,lastIndex);

            const totalPage = Math.ceil(Pokemons?.length/items)
            // console.log(`paginas :${totalPage}`)

            let PageNum =[];

            for(let i=1; i<totalPage; i++){
                PageNum.push(i)
            }



    
    

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
        .then(r => {
                    setPokemons(r.data.results)
                    console.log("POKemons:")
                    console.log(r.data.results)
                    })


        axios.get("https://pokeapi.co/api/v2/type/")
        .then(r => setTypes(r.data.results))

    },[])


    // console.log(types)

    const Submit=(e)=>{
        e.preventDefault();
        // console.log(NameOrId);
        Navigate(`/pokedex/${NameOrId}`)
    }



    const handleSelect=(e)=>{

        let urlTypes = e.target.value
        axios.get(urlTypes)
        .then(r => {
            console.log("type...>");

            console.log(r.data?.pokemon);
            setPokemons(r.data?.pokemon);
        
            // r.data.pokemon.map(pokemon => console.log(pokemon.pokemon.url))
        })
        // console.log(e.target.value)

    }

    console.log(page);

    return (
        <>
                <p className='pokedex'>Pokedex</p>
                <p className='welcome'>welcome <span>{userName}</span> </p>

                <div>
                    <select onChange={handleSelect} name="" id="">
                        {
                            types.map(type =>(
                                
                                <option key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }

                    </select>
                </div>


                <form onSubmit={Submit}>
                    <label htmlFor="id/name">Look for Name/Id</label>
                    <input type="text"  id="id/name"
                            onChange={e => setNameOrId(e.target.value)}
                            value={NameOrId}/>
                    <button >Submit</button>

                </form >
                
                    <ul className='containerCard'>

                    
                        <button onClick={()=>{setPage(page-1)}}
                                disabled={page<=1}>
                        Back</button>
        
                        <div>
                            {
                                PageNum.map( num =>(
                                    <button onClick={()=> setPage(num)} key={num}>{num} </button>
                                    ))
                            }
                        </div>
        
                        <button onClick={()=>setPage(page+1)}
                                disabled={page >=totalPage}>Next</button>
                {


                    
                    pagination?.map(pokemon =>(
                        
                    <CarsdPokemon key={pokemon.url?pokemon.url:pokemon.pokemon.url} pokemonUrl={pokemon.url?pokemon.url:pokemon.pokemon.url}/>
                        
                
                    ))
                }

                        </ul>




        </>
    );
};

export default Pokedex;