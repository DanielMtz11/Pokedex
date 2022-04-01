import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import img from '../img/logo.png';
import search from '../img/search-icon.png'

import pokeball from '../img/pokeball.png'

const Login = () => {

    const Navigate = useNavigate();


    const dispatch = useDispatch();

    const [userName, setUserName]=useState("");

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
        <div>
                {/* <h2>Login</h2> */}
                <section className='container-img'>
                <img class="logo"  src={img} alt="Pokemon"></img>
                </section>


                <form onSubmit={submit} class="search-container">
                    <input type="text"
                            id="search-bar" 
                            placeholder="What`s your name?"
                            onChange={e=>setUserName(e.target.value)}
                            value={userName}
                            required/>
                    <button className='search-icon' >
                            <img src={pokeball} alt="" />
                    </button>
                </form>




                {/* <form onSubmit={submit}>
                    <label htmlFor="InputName">What is your name ?</label>
                    <input 
                        type="text" 
                        id='InputName'
                        onChange={e=>setUserName(e.target.value)}
                        value={userName}
                        required/>

                
                    <button>go</button>
                </form> */}
        </div>
    );
};

export default Login;