import React, { Component } from 'react';

//import api from '../../services/api';
import './More.css';
import more from '../../assets/more.svg';


export default class More extends Component {
    constructor(){
        super();
    this.state = {
      // feed: [],
        showMenu: false,

        
    };
    
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }  
    

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(event) {
       
        if (!this.dropdownMenu.contains(event.target)){
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }
    }

   
  render() {
    return (
       
            
       <section id="more-menu" >
         
                      
           <button type="button" onClick={this.showMenu} >
                <img src={more} alt=""/>
           </button>
                       
            
              { this.state.showMenu
                ? (
                    <article className="menu"
                    ref={(element) => {
                        this.dropdownMenu = element;
                    }}
                    >
                        <button type="button" className="border-bottom">Alterar</button>
                        <button type="button"
                        onClick={this.props.deletePost}
                        >Deletar</button>
                    </article>

                )
                : (
                    null
                )
               }

       </section>
                 
    )
  }
}
