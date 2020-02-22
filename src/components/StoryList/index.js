import React, { useState, useEffect } from 'react';
import './styles.css';
import Story from '../Story';
import api from '../../services/api';
export default function StoryList() {

    const [user, setUser] = useState([]);

  useEffect(() => {

    async function getListUsers() {

      const response = await api.get('/users' );
      

      setUser(response.data);

    }

    getListUsers();

  }, []);
    
    return (

      <div className="container-story">
          {user.map(user => (
             <Story  key={user._id} user={user}/>
             
          ))}
     
      </div>
    );
  };

