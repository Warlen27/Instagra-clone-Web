import React, { useState, useMemo } from 'react';

import './styles.css';
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import avatar from '../../assets/IMG6.jpg';
import Header from '../../components/Header';


function New({ history }){
    const _id =  localStorage.getItem('userId');

    const [thumbnail, setThumbnail] = useState(null);
    const [description, setDescription] = useState('');
   // const [avatar_url, setAvatar] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
      }, [thumbnail])

     
    
    async function handleSubmit(event) {
        event.preventDefault();

        
        
        const data = new FormData();
        data.append('thumbnail', thumbnail);
        data.append('description', description);
        
        
       console.log(_id)
       

       const response  = await api.post(`/posts/${_id}`, data)

       console.log(response.data);

        history.push('/feed');
    }

    //const  res  =  api.get(`/users/${_id}`);
           // const {avatar_url} = res.data;
    //console.log(res.data)
   
        return(
           
            <>
            
            <Header/>

            <form id="new-post" onSubmit={handleSubmit}>
           
               <article className="header"> 

                    <h3>Nova publicação</h3>
                    <button type="submit">Compartilhar</button>

               </article> 
               <article className="footer"> 
               
               
                      <img src={avatar} alt="avatar"/>         
                <textarea
                    name="description"
                    placeholder="Escreva uma legenda..."
                    value={description}
                    onChange={event => setDescription(event.target.value)}   
                ></textarea>
                

                <div id="content-label">    
                    <label id="thumbnail"
                    style={ { backgroundImage: `url(${preview})` } }
                    className={preview ? 'placeholder' : ''}
                    >
                    <input  type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    <img src={camera} alt="Select img"/>

                </label>
                </div>  

                </article> 
                    
                
           </form>
            </>
        );
    
}

export default New;