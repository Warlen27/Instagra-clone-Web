import React, { useEffect, useState } from 'react';

import './Styles.css';
import api from '../../services/api';
import Header from '../../components/Header';

export default function Profile() {

  const [profile, setProfile] = useState('');
  const [posts, setPosts] = useState([]);
  
  const id = localStorage.getItem('userId');

  useEffect(() => {
    async function loadProfile() {
  
      const response = await api.get(`/users/${id}`);
      
    
      setProfile(response.data);
      setPosts(response.data.posts)
      //console.log(response.data)
      console.log(response.data.posts)
         
    }
    
     loadProfile();
  }, []);
 

  return (
    <>
      <Header/>
      <section id="container">
        <div className="header-content">
           <div className="avatar">
               <span>
                   <img src={profile.avatar_url} alt=""/>
               </span>
        </div>
        <span className="username">{profile.username}</span>

        <div className="btn-profile"><button type="text">Editar perfil</button></div>
         
        <ul className="content-pff">

          <li className="p">
            <span className="count-publication">2</span>
            <span className="publications">publicações</span>
          </li>
          <li className="f1">
            <span className="count-followers">74</span>
            <span className="followers">seguidores</span>
          </li>
          <li className="f2">
            <span className="count-following">31</span>
            <span className="following">seguindo</span>
          </li>
        </ul>
        <span className="name">{profile.name}</span>
           
        </div>
       
        <ul className="posts">  
          {posts.map(post => (
            <li key={post._id}>
              <img src={post.thumbnail_url} alt={post.thumbnail_url} />
             
            </li>
          ))}
        </ul> 
      </section>
    </>
  );
}
