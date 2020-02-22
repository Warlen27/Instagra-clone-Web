import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './styles.css';
import More from '../../assets/more.svg';



export default function Menu({ deletePost }) {
    const [menu, setMenu] = useState(false);

 function showMenu() {
       if(menu) {
        setMenu(false);
       }else {
        setMenu(true)
       }
       
    }

  function closeMenu(event) {
       
      if (!menu.contains(event.target)){
        setMenu(false)

      }
  }

    return (
       
            
       <section id="more-menu" >
               
           <button type="button" onClick={showMenu} >
                <img src={More} alt="Mais..."/>

                { menu
                ? (
                    <article className="menu">
                        <button type="button" className="border-bottom" 
                              
                         >
                            <Link to="">
                              Editar
                            </Link>
                            
                         </button>
                        

                        <button type="button"
                        onClick={deletePost}
                       
                        >Excluir</button>
                    </article>

                )
                : (
                    null
                )
               }
           </button>
                       
             

       </section>
                 
    )
  }

