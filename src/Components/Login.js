import React from 'react';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import podedeximg from '../img/pokedex.png'
import loginImg from '../img/loginImg.png'
import loginImg338px from'../img/loginImg338px.png'
import Footer from './Footer';


const Login = () => {
    const [userName, setUserName]=useState("");

    const Navigate = useNavigate();

    const dispatch = useDispatch();
    const isDark = useSelector(state => state.isDark);

    const size = window.screen.width;


    const submit =(e)=>{
        e.preventDefault();
        // console.log(name);
        dispatch ({type: "GET_USERNAME",
                    payload: userName})

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
                    <h2 style={{color: isDark? "#964131": "#DD1A1A"}}>Hello Trainer !</h2>
                    <p style={{color: isDark? "gray": "black"} }>Give me your name to start</p>
                </section>

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
                        {size<1024 &&
                        <img src={size <460? loginImg338px : loginImg} alt="" />}
                </section>


                <Footer/>



        </div>
    );
};

export default Login;