import React from 'react';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import elipse from '../img/Ellipse.png'
import elipse2 from '../img/Ellipse2.png'

import podedeximg from '../img/pokedex.png'

// import pokeball from '../img/pokeball.png'

import loginImg from '../img/loginImg.png'

import loginImg338px from'../img/loginImg338px.png'

const Login = () => {

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const [userName, setUserName]=useState("");

    const size = window.screen.width;
    // console.log(size);

    const isDark = useSelector(state => state.isDark);

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
                <section className='container-img'>
                <img className="logo"  src={podedeximg} alt="Pokemon"></img>
                </section>


                <section  className='greet'>

                <h2 style={{color: isDark? "#964131": "#DD1A1A"}}>Hello Trainer !</h2>
                <p style={{color: isDark? "gray": "black"} }>Give me your name to start</p>
                </section>

                <form onSubmit={submit} className="search-container">
                    <input type="text"
                            id="search-bar" 
                            placeholder="Your name..."
                            onChange={e=>setUserName(e.target.value)}
                            value={userName}
                            required/>
                    <button style={{background: isDark? "#964131": "#DD1A1A"}}  className='search-icon' >Go
                            {/* <img src={pokeball} alt="" /> */}
                    </button>
                </form>


                <section className='loginImg'>
                        {size<1024 &&
                        <img src={size <460? loginImg338px : loginImg} alt="" />}
                </section>


                <section className='footer'>
                    <div className='red'>

                    </div>

                    <div className='black'></div>
                </section>


            <button onClick={submit} className='btn' >

                <div  className='elipse'>
                    <img src={elipse} alt="" />
                </div>

                <div  className='elipse2'>
                    <img src={elipse2} alt="" />
                </div>

            </button>

        </div>
    );
};

export default Login;