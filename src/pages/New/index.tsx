import React, { useState, useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { Form, HeaderStyle, Footer, ContainerLabel, Thumbnail } from "./styles";
import { createNewPost } from "../../services/post.service";
import camera from "../../assets/camera.svg";
import avatar from "../../assets/IMG6.jpg";
import Header from "../../components/Header";

function New() {
  const history = useHistory();
  const _id = localStorage.getItem("userId");

  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  // const [avatar_url, setAvatar] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : "";
  }, [thumbnail]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = new FormData();
    data.append("thumbnail", thumbnail);
    data.append("description", description);

    console.log(_id);

    const response = await createNewPost(`${_id}`, data);

    console.log(response.data);

    history.push("/feed");
  }

  //const  res  =  api.get(`/users/${_id}`);
  // const {avatar_url} = res.data;
  //console.log(res.data)

  const handleThumbnail = useCallback((event) => {
    setThumbnail(event.target.files[0]);
  }, []);

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit}>
        <HeaderStyle>
          <h3>Nova publicação</h3>
          <button type="submit">Compartilhar</button>
        </HeaderStyle>
        <Footer>
          <img src={avatar} alt="avatar" />
          <textarea
            name="description"
            placeholder="Escreva uma legenda..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <ContainerLabel>
            <Thumbnail
              style={{ backgroundImage: `url(${preview})` }}
              className={preview ? "placeholder" : ""}
            >
              <input type="file" onChange={handleThumbnail} />
              <img src={camera} alt="Select img" />
            </Thumbnail>
          </ContainerLabel>
        </Footer>
      </Form>
    </>
  );
}

export default New;
