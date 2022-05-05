import { React, useState } from 'react';

// useSelector es usado para obtener el state de la store, mientras que useDispatch sirve para ejecutar las acciones que se encuentran en el swicht de redux
import {useSelector,useDispatch} from 'react-redux';

//useNavigate es un hook de react-router-dom que sirve para navegar entre las paginas ya sea a la siguiente o a la anterior.
import {useNavigate} from 'react-router-dom';

import Footer from './Footer';

import podedeximg from '../Assets/img/pokedex.png';
import loginImg from '../Assets/img/loginImg.png';
import loginImg338px from'../Assets/img/loginImg338px.png';


const Login = () => {
    const [userName, setUserName]=useState("");
    
    //UserName es el nombre que el usuario proporcionará, por esta razón se inializa con cadenas vacias.
    const Navigate = useNavigate();

    const dispatch = useDispatch();

    //creamos una constante para acceder al valor isDark dentro de la store.
    const isDark = useSelector(state => state.isDark);

    //para obtener el tamaño de pantalla.
    const size = window.screen.width;

    const submit =(e)=>{
        e.preventDefault();
        dispatch ({type: "GET_USERNAME",
                    payload: userName})//esperamos la respuesta del usuario para poder guardarla en la store.
                    setUserName("");
                    //al hacer submit tambien tenemos que cabiar a la ruta: /Pokedex.js
                    Navigate("/Pokedex");
    }


    return (
        <div className='Login'>
                <section className='Login__logo'>
                    <img src={podedeximg} alt="Pokemon"></img>
                </section>

                <section  className='Login__greeting'>
                    {/* seteamos la propiedad color dependiendo del estado de 'isDark' */}
                    <h2 style={{color: isDark? "#964131": "#DD1A1A"}}>Hello Trainer !</h2>
                    <p style={{color: isDark? "gray": "black"} }>Give me your name to start</p>
                </section>

                {/* al hacer submit(click al button) ejecutamos la funcion 'submit') */}
                <form onSubmit={submit} className="Login__form">
                    <input type="text"
                            id="search-bar"
                            placeholder="Your name..."
                            onChange={e=>setUserName(e.target.value)}
                            value={userName}
                            required/>
                    <button style={{background: isDark? "#964131": "#DD1A1A"}}>Go</button>
                </form>


                <section className='Login__img'>
                    {/* si el tamaño de la pantalla es menor a 1024px se muestra la imagen, dependiendo de los respectivos tamaños, se muestra una u otra. */}
                        {size<1024 &&
                        <img src={size <460? loginImg338px : loginImg} alt="" />}
                </section>

                {/* mandamos a traer al componente Footer */}
                <Footer/>



        </div>
    );
};

export default Login;