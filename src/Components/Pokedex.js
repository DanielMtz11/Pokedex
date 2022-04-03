import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import CarsdPokemon from './CarsdPokemon';
import {useNavigate} from 'react-router-dom'

import elipse from '../img/Ellipsetop.png'
import elipse2 from '../img/Ellipse2.png'

import podedeximg from '../img/pokedex.png'
// import mod from '../img/mod.png'
import darkmod from '../img/darkmod.png'
import whitemod from '../img/whitemod.png'
import search from '../img/search-icon.png'





const Pokedex = () => {
    const [Pokemons, setPokemons]= useState(null) //para almacenar los pokemons consumidos
    const [types, setTypes]= useState([]);
    const [page, setPage] =useState(1);
    const [iteration, setIteration] = useState(1);
    
    //para navegar a podexData
    const Navigate = useNavigate();


    const[NameOrId, setNameOrId] = useState("");
    // console.log(Pokemons)


    //desde la store...
    
    const userName = useSelector(state => state.userName);

    const isDark = useSelector(state => state.isDark);

    const dispatch = useDispatch();//useDispatch sirve para ejecutar las acciones que se encuentran en el swicht de redux






    
            //* Codigo para la paginacion 
    

            //Mostraremos solo 6 items por pagina
            const items= 6;

            //lastIndex determina el ultimo indice de cada pagina 
            //firstIndex determina el primer indice de cada pagina
            const lastIndex = items *page;
            const firstIndex = lastIndex - items;

            //la paginacion consiste en realizar un slice al array pokemos, pasando como parametros los indices determinados
            const pagination = Pokemons?.slice(firstIndex,lastIndex);

            //el total de paginas se determina dividiendo el array de pokemons sobre los items a mostrar.
            // y se redondea al numero mas alto para evitar decimales:  255/6 = 42.5 = 43
            const totalPage = Math.ceil(Pokemons?.length/items)
            // console.log(`paginas :${totalPage}`)

            //llenamos PageNum por cada pagina dentro de totalPage
            let PageNum =[];
            for(let i=1; i<totalPage; i++){
                PageNum.push(i)
            }

            const pagestoShow = 10;
            const lastPage = pagestoShow*iteration;
            const firstPage = lastPage - pagestoShow;
            
            const showPage = PageNum?.slice(firstPage,lastPage);
            const totalShowPage = Math.ceil(PageNum?.length/pagestoShow);
            // console.log(`total :${totalShowPage}`);
            // console.log(`showpage: ${showPage}`);

            // console.log(`PageNum: ${PageNum}`)
            // console.log(`i: ${iteration}`);





    
    

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
        .then(r => {
                    setPokemons(r.data.results)
                    // console.log("POKemons:")
                    // console.log(r.data.results)
                    })


        axios.get("https://pokeapi.co/api/v2/type/")
        .then(r => setTypes(r.data.results))

    },[])



    const Submit=(e)=>{
        e.preventDefault();
    

        const lowerCaseNameorId =NameOrId.toLowerCase()
        // NameOrId.toUpperCase();
        console.log(lowerCaseNameorId)
        Navigate(`/pokedex/${lowerCaseNameorId}`)
    }



    const handleSelect=(e)=>{

        let urlTypes = e.target.value
        axios.get(urlTypes)
        .then(r => {
            // console.log("type...>");

            // console.log(r.data?.pokemon);
            setPokemons(r.data?.pokemon);
        
            // r.data.pokemon.map(pokemon => console.log(pokemon.pokemon.url))
        })
        // console.log(e.target.value)

    }

    // console.log(page);

    // console.log( `types from pokedex: `)
    // console.log(types)


   const handleTypes=()=>{

    const Types=[]
        types.map(type =>(
            Types.push(type.name)
            
            ))
            // console.log(Types)

                
            

}


    handleTypes();


    return (
        <>

        
                <section className='top'>
                    <div className='red-top'></div>

                    <div className='black'></div>


                    <div  className='elipse-top'>
                        <img src={elipse} alt="" />
                    </div>
                    

                    <div  className='elipse2-top'>
                        <img src={elipse2} alt="" />
                    </div>

                    
                </section>
                    <section className='container-img-top'>
                        <img className="logo"  src={podedeximg} alt="Pokemon"></img>
                    </section>
        
                <section className='containerPokedex'>

                <button className='btnMod' onClick={()=>dispatch({type: "SET_ISDARK"})}>
                    <img src={isDark? whitemod : darkmod} alt="" />
                </button>

                <p className='welcome'> <span>welcome {userName}</span> here you can find your favorite pokemon </p>

                <section className='inputs'> 


                <form onSubmit={Submit}>
                    {/* <label htmlFor="id/name">Look for Name/Id</label> */}
                    <input className='inputPokemon'
                            type="text"  id="id/name"
                            onChange={e => setNameOrId(e.target.value)}
                            value={NameOrId}
                            placeholder="pokemon name/id"
                            required
                            />
                    <button className='btnSearch' >
                        <img src={search} alt="" />
                    </button>
                </form >



                <div className='select'>
                    <select  onChange={handleSelect} name="" id="">

                        <option selected="selected" disabled >All Pokemons</option>
                        {
                            types.map(type =>(
                                
                                <option key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }

                    </select>
                </div>
                </section>


           
                
                    <ul className='containerCard'>

                        <button onClick={()=>setIteration(iteration-1)}
                                disabled={ iteration<=1}>
                                «
                        </button>
                    
                        <div>
                            {
                                showPage.map( num =>(
                                    <button onClick={()=> setPage(num)} key={num}>{num} </button>
                                    ))
                                }
                        </div>
                                
                        <button onClick={()=> setIteration(iteration+1)}
                                disabled ={iteration >=totalShowPage }>
                                »
                        </button>
        
                       
                {


                    
                    pagination?.map(pokemon =>(
                        
                    <CarsdPokemon key={pokemon.url?pokemon.url:pokemon.pokemon.url} pokemonUrl={pokemon.url?pokemon.url:pokemon.pokemon.url}  />
                        
                
                    ))
                }



                        </ul>

                        
                        <button onClick={()=>{setPage(page-1)}}
                                disabled={page<=1}>
                                Back
                        </button>
        

                        <button onClick={()=>setPage(page+1)}
                                disabled={page >=totalPage}>
                                Next
                        </button>


                        </section>


        </>
    );
};

export default Pokedex;