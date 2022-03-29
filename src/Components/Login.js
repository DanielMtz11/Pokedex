import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

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
                <h2>Login</h2>


                <form onSubmit={submit}>
                    <label htmlFor="InputName">What is your name ?</label>
                    <input 
                        type="text" 
                        id='InputName'
                        onChange={e=>setUserName(e.target.value)}
                        value={userName}
                        required/>

                
                    <button>go</button>
                </form>
        </div>
    );
};

export default Login;