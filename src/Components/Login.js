import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
// import img from '../img/logo.png';
import elipse from '../img/Ellipse.png'
import elipse2 from '../img/Ellipse2.png'

import podedeximg from '../img/pokedex.png'
// import search from '../img/search-icon.png'

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
        <div className='container-login'>
                {/* <h2>Login</h2> */}
                <f className='container-img'>
                <img className="logo"  src={podedeximg} alt="Pokemon"></img>
                </f>


                <form onSubmit={submit} className="search-container">
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


                <section className='footer'>
                    <div className='red'>

                    </div>

                    <div className='black'></div>
                </section>

                <div  className='elipse'>
                    <img src={elipse} alt="" />
                </div>

                <div  className='elipse2'>
                    <img src={elipse2} alt="" />
                </div>


        </div>
    );
};

export default Login;