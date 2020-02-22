import React, { useState, /*useMemo*/ } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './Styles.css';
import '../../Form.css';
import logo from '../../assets/logo@2x.png';

export default function Register({ history }) {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 async function handleSubmit(event) {
      event.preventDefault();

     try{ 
     const response = await api.post('/users', {
           name,
           username,
           email,
           password,
         })
         const user = response.data;

         if(user) {
              history.push('/login')
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
                        type="text" 
                        id="name" 
                        placeholder="Nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                      <input 
                        type="text" 
                        id="username" 
                        placeholder="Nome do usuário"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        />
                        
                      <input            
                        type="password" 
                        id="password"                    
                        placeholder="Password"           
                        value={password}          
                        onChange={event => setPassword(event.target.value)}
                        />

                      <button type="submit"> Cadastre-se </button>
            
                  </form>


            </div>
            <div className="footer-register">
                <p className="register">
                  Tem uma conta? 
                  <Link to="/login" >
                    <span>
                      Conecte-se
                    </span>
                  </Link>
                </p>
            </div>

        </div>


  );
}

