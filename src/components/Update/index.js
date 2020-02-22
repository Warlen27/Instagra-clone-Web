import React, { Component } from 'react';

import api from '../../services/api';
// import { Container } from './styles';

class Update extends Component {

    state = {
       _id: '',
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };
    handleSubmit = async (e, id)=> {
        e.preventDefault();
        
        const data = new FormData();
      data.append('_id', this.state._id);
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await  api.post(`/posts/${id}/update`)
        console.log(id)

        this.props.history.push('/');
    }

   /*  updatePost = async id => {
      await  api.post(`/posts/${id}/update`)
      .then(response =>{
          console.log(response.data)
      })
       
    }*/

    handleImageChange = e =>{
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount(){
        console.log(this.props.postId)
    }


    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange}/>

                <input
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <input
                    type="text"
                     name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type="submit">Enviar</button>
                
           </form>

        );
    }
}

export default Update;
