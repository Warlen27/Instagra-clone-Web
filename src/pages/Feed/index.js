import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import io from 'socket.io-client';
import Menu from '../../components/Menu';
import StoryList from '../../components/StoryList';
import './styles.css';
import like from '../../assets/like.svg';
import * as moment from 'moment'; import 'moment/locale/pt-br';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import collect from '../../assets/collect.svg';
import Header from '../../components/Header';


export default function Feed() {
        const [feed, setFeed] = useState([]);

        
    
    useEffect(() => {
        async function loadPost() {
            registerToSocket();
            const response = await api.get('/posts');
               
            setFeed(response.data);
    
        }

        loadPost();

    },[])
 
    
    function registerToSocket(){
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            setFeed([newPost, ...feed]) 
        })

        socket.on('like', likedPost => {
            setFeed(
                 feed.map(post => 
                    post._id === likedPost._id ? likedPost : post
                    ) 
                ) 
        })

        socket.on('delete', deletedPost =>{
            setFeed(
                    feed.filter(post =>
                    post._id !== deletedPost._id 
                    )   
              )
            
        })

        socket.on('update', post => {
            setFeed([post, ...feed]) 
        })
    }
    
   function handleLike(id) {
        api.post(`/posts/${id}/like`);
    }

   function deletePost(id){
       api.delete(`/posts/${id}/del`);
    }

   /* updatePost = id => {
        api.post(`/posts/${id}/update`);
       
    }*/
    
        
        return(
            <>
                <Header/>
                <section id="post-list">
                    <StoryList/>
               {feed.map( (post, user)=> (
                   
                    <article key={post._id}  > 
                        <header >
                        <div className="user-info">
                        
               <div id="wrapper-image"> <img src={post.author.avatar_url} alt="author"/> </div> 
                    <span>{post.author.username}</span>

                </div>

                      <Menu 
                       deletePost={() => deletePost(post._id)} 
                       updatePost={post._id} 
                      />
                  
                   </header>

                   <img src={post.thumbnail_url}   alt=""/>
                   <footer >
                   <div className="container-actions">
                        <div className="actions">
                            
                                <button type="button" onClick={()=> handleLike(post._id)}  >    
                                    <img src={like} alt=""/>
                                </button>      
                                <img src={comment} alt=""/>
                                <img src={send} alt=""/>  
                                </div>
                       <img src={collect} alt=""/> 
                       </div>
                       <strong>{post.likes} curtidas</strong>
                       <p>
                           {post.description}
                        

                           <span>{moment(post.createdAt).locale('pt-br').startOf('minutes').fromNow()}</span>

                       </p>
                   </footer>
               </article>
                )) }
               
            </section>
            </>
        )
    }


