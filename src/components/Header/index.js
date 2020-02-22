import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logopart1 from '../../assets/logo-part1.svg';
import logopart2 from '../../assets/logo@2x.png';
import camera from '../../assets/camera.svg';
import profile from '../../assets/profile.svg';


export default function Header(){
    return(
            <header id="main-header" >
                <div className="header-content">
                    <Link to="/feed">
                        <div className="left-content">
                
                            <img src={logopart1} alt="Meu Insta"/>
                            <div className="separator"></div>
                            <img src={logopart2} id="logo2" alt="Meu Insta"/>

               
                        </div>
                    </Link>
                    <div className="height-content">    
                        <Link to="/new">
                            <img src={camera} alt="Enviar publicações"/>
                        </Link>

                        <Link to="/profile">
                            <img src={profile} alt="perfil"/>
                        </Link>

                    </div>     
                </div>

            </header>
        );
}