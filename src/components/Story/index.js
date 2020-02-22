import React from 'react';

import './styles.css';

export default function Story({ user }){


    return (
      <section id="story" >
        <div id="wrapper-image">
            <img src={user.avatar_url} alt=""/>
        </div>
        <span>{user.username}</span>
      </section>
    );
  };

