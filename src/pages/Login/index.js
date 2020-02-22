import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../../Form.css';

import api from '../../services/api';
import logo from '../../assets/logo@2x.png';

 function Login({ history }) {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

 async function handleSubmit(event) {
        event.preventDefault();

    try{    
        const response = await api.post('/login', { email, password });

        const { _id } = response.data;

       const res = await api.get(`/users/${_id}`);


        const   profile  = res.data;
     

       if(_id) {
            localStorage.setItem('userId', _id);
            localStorage.setItem('profile', JSON.stringify(profile));
            history.push('/feed');
       }
   
        
    }catch(err){
        alert('erro'+ err)
    }  

      }

      return (
          
        <div className="container">
               
                <span style={ { backgroundImage: `url(${logo})` } } ></span>
            
            <div className="content">
                <form onSubmit={handleSubmit}>
          
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />

                    <input 
                    type="password" 
                    id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />

                    <button type="submit" className="btn" >Entrar</button>

                  
                </form>
                
            </div>

            <div className="footer-register">
                <p className="register">
                    Não tem uma conta? 
                    <Link to="/" >
                        <span>
                             Cadastre-se
                        </span>
                    </Link>
                </p>
            </div>
            
        </div>
        
    
    );
  }

  export default Login;