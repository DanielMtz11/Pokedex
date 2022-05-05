import {React, useEffect , useState} from 'react';

//importamos axios para poder consumir la API
import axios from 'axios';

// useSelector es usado para obtener el state de la store redux mientras que useDispatch sirve para ejecutar las acciones que se encuentran en el swicht de redux
import {useSelector, useDispatch, } from 'react-redux';

//useNavigate es un hook de react-router-dom que sirve para navegar entre las paginas ya sea a la siguiente o a la anterior.
import {useNavigate} from 'react-router-dom';


import CarsdPokemon from './CarsdPokemon';

import elipse from '../img/Ellipsetop.png';
import elipse2 from '../img/Ellipse2.png';

import podedeximg from '../img/pokedex.png';
import darkmod from '../img/darkmod.png';
import whitemod from '../img/whitemod.png';
import search from '../img/search-icon.png';
import next from '../img/next.png';
import back from '../img/back.png';





const Pokedex = () => {
    const [Pokemons, setPokemons]= useState(null); //para almacenar los pokemons 
    const [types, setTypes]= useState([]); //para guardar los tipos de pokemons. se inicializa con [], ya que es un array el resultado devuelto del endPoint a consumir.
    const [iteration, setIteration] = useState(1);//para saber que paginas mostrar, en la iteracion 1 muestra de la 1-6, en la 2 de la 7-12, etc.

    const [isLoading, setIsLoading]= useState(true);//estado para determinar si esta cargando o no, hasta que no termina de cargar muestra los datos.

    const[NameOrId, setNameOrId] = useState("");//estado que almacena el nombre o id proporcionados por el usuarion en el input.
    
    //para navegar a podexData
    const Navigate = useNavigate();

    const dispatch = useDispatch();//useDispatch sirve para ejecutar las acciones que se encuentran en el swicht de redux.

    //*Datos traidos desde la store
    const userName = useSelector(state => state.userName);
    const isDark = useSelector(state => state.isDark);
    
    const page = useSelector(state => state.page);
    const Number = useSelector(state => state.Number);


    // ---------- codigo para la paginacion -----------
            let items;    

            //dependiendo del tamaño de la pantalla se muestran 6 items/pokemons (para celulares y tablets) o 9 items/pokemons (para desktop)
            const size = window.screen.width;
                if(size <1024){
                    items = 6;
                }

                else{
                    items = 9;
                }

            //lastIndex determina el ultimo indice de cada pagina 
            //firstIndex determina el primer indice de cada pagina
            const lastIndex = items *page;
            const firstIndex = lastIndex - items;

            //la paginacion consiste en realizar un slice al array pokemons, pasando como parametros los indices determinados
            const pagination = Pokemons?.slice(firstIndex,lastIndex);

            //el total de paginas se determina dividiendo el array de pokemons sobre los items a mostrar.
            // y se redondea al numero mas alto para evitar decimales:  255/6 = 42.5 = 43
            const totalPage = Math.ceil(Pokemons?.length/items);

            //llenamos PageNum por cada pagina dentro de totalPage
            let PageNum =[];
            for(let i=1; i<totalPage; i++){
                PageNum.push(i);
            }

            //se realiza la misma logica pero esta vez para mostrar las paginas siguientes o anteriores, en este caso solo se mostraran 6 botones para poder movernos hacia otra pagina.
            const pagestoShow = 6;
            const lastPage = pagestoShow*iteration;
            const firstPage = lastPage - pagestoShow;
            
            const showPage = PageNum?.slice(firstPage,lastPage);
            const totalShowPage = Math.ceil(PageNum?.length/pagestoShow);
        // ---------- //codigo para la paginacion -----------
        

        // realizamos las peticiones tipo get a la Api. primero al endPoint que trae todos los Pokemons y despues al endPoint que los trae por tipo.
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0")
        .then(r => {
                    setPokemons(r.data.results);//seteamos pokemons, ahora contiene los datos arrojados por la Api.
                    setIsLoading(false);//seteamos isLoading , ya que en este punto ya terminaron de cargar los datos.
                    })

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(r =>{ 
                    setTypes(r.data.results);//seteamos 'types', ahora contiene todos los tipos de pokemons arrojados por la Api. 
                })
    },[])



    const Submit=(e)=>{
        //impide que un boton envie un formulario.
        e.preventDefault();
    
        //transforamos a lowerCase lo que el usuario proporcione en el input para evitar errores.
        const lowerCaseNameorId =NameOrId.toLowerCase();

        //navegamos al componente PokedexData con el nombre/id que el usuario proporciona.
        Navigate(`/pokedex/${lowerCaseNameorId}`);
    }



    const handleSelect=(e)=>{
        
        //despachamos acciones desde la store para resetear la paginación cada vez que se haga otro consumo por tipo.
        dispatch({type: "RESET_PAGE"});
        dispatch({type: "RESET_NUM"});

        //almacenamos la url del tipo
        let urlTypes = e.target.value;

        //consumimos la url
        axios.get(urlTypes)
        .then(r => {

            setPokemons(r.data?.pokemon);
            // en pokemons ahora tenemos los pokemons por tipo.
            })
    }


    const handleTypes=()=>{

        const Types=[];//para almacenar los tipos.
        types.map(type =>(
            // Obtememos el nombre de los tipos.
            Types.push(type.name)
            ))
        }

        //funcion que se mantiene ejecutando siempre ya que en todo momento nececitamos mostrar el nombre del tipo en el select.
    handleTypes();


    //si isLoading es true retornanmos lo siguiente.
    if(isLoading){
        return(
            <div className='Loading' style={{background: isDark? "#241d1d": "linear-gradient(180deg, rgba(191,191,191,1) 0%, rgba(80,78,78,1) 99%)", color:isDark? "whitesmoke":"dark"}}>
            <p>Loading...</p>
            </div>
        )
    }

//si no lo, es retornamos:
    return (
        <>        
            <section className='Top'>
                    <div className='Top__color'></div>

                    <div className='Top__color--black'></div>


                    <div  className='Top__elipse'>
                        <img src={elipse} alt="" />
                    </div>
                    

                    <div  className='Top__elipse--small'>
                        <img src={elipse2} alt="" />
                    </div>
            </section>

            <section className='Top__logo'>
                        <img  src={podedeximg} alt="Pokemon"></img>
            </section>
        
            <section className='ContainerPokedex'>

                <button className='ContainerPokedex__btnIsDark' onClick={()=>dispatch({type: "SET_ISDARK"})}>
                    <img src={isDark? whitemod : darkmod} alt="" />
                </button>
                <p className='ContainerPokedex__welcome' style={{color: isDark? "whitesmoke": "black"} } > <span style={{color: isDark? "#ea6565": "#DD1A1A"}}>welcome {userName}</span> here you can find your favorite pokemon </p>

                <section className='ContainerPokedex__inputs'> 

                    <form onSubmit={Submit}>
                        <input className='ContainerPokedex__inputPokemon'
                                type="text"  id="id/name"
                                onChange={e => setNameOrId(e.target.value)}
                                value={NameOrId}
                                placeholder="pokemon name/id"
                                required
                                />
                        <button className='ContainerPokedex__btnSearch' >
                            <img src={search} alt="" />
                        </button>
                    </form >

                    <div className='ContainerPokedex__select'>
                        {/* al cambio ejecutamos la funcion 'handleSelect' */}
                        <select  onChange={handleSelect} name="" id="">

                            {
                                //realizamos un map a types para obtener todos los tipos de pokemons.
                                types.map(type =>(
                                    
                                    <option key={type.url} value={type.url}>
                                        {type.name}
                                    </option>
                                ))
                            }

                        </select>
                    </div>
                </section>

                <section className='ContainerPokedex__BtnsPagination'>
                            
                        {/* 'boton menos' que sirve para setear el numero de la pagina */}
                        <button onClick={()=>{ dispatch({type: "SET_PAGE-1"})
                                                dispatch({type: "SET_NUM-1"})}}
                               //si la pagina es igual a 1 desabilitamos el boton para que no arroje 0 o resultados negativos.                 
                                disabled={page<=1}>
                                <img src={back} alt="" />
                        </button>
        
                        <p style={{color: isDark? "gray": "black"} }>
                            <span style={{color: isDark? "#964131": "#DD1A1A"}}> {page }</span> / {totalPage}
                        </p>

                        {/* 'boton mas' que sirve para setear el numero de la pagina */}
                        <button onClick={()=>{dispatch({type: "SET_PAGE+1"})
                                                dispatch({type: "SET_NUM+1"})}}
                                //si nos encontramos en la ultima pagina desabilitamos.                 
                                disabled={page >=totalPage}>
                                <img src={next} alt="" />
                        </button>

                </section>

                <ul className='ContainerPokedex__cards'>
                    {
                        //realizamos un map a la paginacion
                        pagination?.map(pokemon =>(
                        // la key depende de si el pokemon fue buscado o seleccionado,  de igual manera pokemonUrl.
                        <CarsdPokemon key={pokemon.url?pokemon.url:pokemon.pokemon.url} pokemonUrl={pokemon.url?pokemon.url:pokemon.pokemon.url}  />             
                        ))
                    }
                </ul>

                <section className='ContainerPokedex__pagination'>
                        <button style={{  background: isDark? "#964131": "#DD1A1A"}} onClick={()=>{
                                                setIteration(iteration-1)}}
                                                disabled={ iteration<=1}>
                                «
                        </button>
                        
                        <div>
                            {   
                            showPage.map( num =>(
                            <button style={{background : num===Number?(isDark? ("#964131"):( "#DD1A1A")): ("rgb(44, 42, 42)") }} onClick={()=>{
                                                    dispatch({type: "SET_PAGE",
                                                                payload: num})

                                                    dispatch({ type: "SET_NUM",
                                                                payload: num})
                                                            }} 
                                                    key={num}>
                                            {num} 
                            </button>
                            ))
                                }
                        </div>
                                
                        <button style={{  background: isDark? "#964131": "#DD1A1A"}} onClick={()=> setIteration(iteration+1)}
                                disabled ={iteration >=totalShowPage }>
                                »
                        </button>
                    
                
                
                </section>
            </section>
        </>
    );
};

export default Pokedex;