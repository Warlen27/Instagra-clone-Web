import React, { useCallback, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "../../Form";
import { updatePost } from "../../services/post.service";
// import { Container } from './styles';

type State = {
  _id: string;
  image: string;
  author: string;
  place: string;
  description: string;
  hashtags: string;
};

type TypeId = {
  postId: string;
};

function Update() {
  const { postId } = useParams<TypeId>();

  const history = useHistory();
  const [state, setState] = useState<State>({
    _id: "",
    image: "",
    author: "",
    place: "",
    description: "",
    hashtags: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("_id", state._id);
    data.append("image", state.image);
    data.append("author", state.author);
    data.append("place", state.place);
    data.append("description", state.description);
    data.append("hashtags", state.hashtags);

    await updatePost(`${postId}`);
    console.log(postId);

    history.push("/");
  };

  const handleImageChange = useCallback(
    (e: any) => {
      setState({ ...state, image: e.target.files[0] });
    },
    [state]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [e.target.name]: e.target.value });
    },
    [state]
  );

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}
    >
      <input type="file" onChange={handleImageChange} />

      <input
        type="text"
        name="author"
        placeholder="Autor do post"
        onChange={handleChange}
        value={state.author}
      />

      <input
        type="text"
        name="place"
        placeholder="Local do post"
        onChange={handleChange}
        value={state.place}
      />

      <input
        type="text"
        name="description"
        placeholder="Descrição do post"
        onChange={handleChange}
        value={state.description}
      />

      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do post"
        onChange={handleChange}
        value={state.hashtags}
      />

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default Update;
