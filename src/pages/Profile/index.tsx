import React, { useEffect, useState } from "react";

import {
  Container,
  HeaderContent,
  Avatar,
  Username,
  BtnProfile,
  ContentPff,
  CountSpan,
  Name,
  Posts,
} from "./Styles";
import { getUserById } from "../../services/user.service";
import Header from "../../components/Header";

type UserData = {
  avatar_url: string;
  username: string;
  name: string;
};

type PostData = {
  thumbnail_url: string;
  _id: string;
};

export default function Profile() {
  const [profile, setProfile] = useState<UserData>({} as UserData);
  const [posts, setPosts] = useState<PostData[]>([]);

  const id = localStorage.getItem("userId");

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await getUserById(`${id}`);

        setProfile(response);
        setPosts(response.posts);
        //console.log(response.data)
        // console.log(response.posts);
      } catch (error) {
        console.log(error);
      }
    }

    loadProfile();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <Avatar>
            <span>
              <img src={profile.avatar_url} alt="" />
            </span>
          </Avatar>
          <Username>{profile.username}</Username>

          <BtnProfile>
            <button type="button">Editar perfil</button>
          </BtnProfile>

          <ContentPff>
            <li className="p">
              <CountSpan className="count-publication">2</CountSpan>
              <span className="publications">publicações</span>
            </li>
            <li className="f1">
              <CountSpan className="count-followers">74</CountSpan>
              <span className="followers">seguidores</span>
            </li>
            <li className="f2">
              <CountSpan className="count-following">31</CountSpan>
              <span className="following">seguindo</span>
            </li>
          </ContentPff>
          <Name>{profile.name}</Name>
        </HeaderContent>

        <Posts>
          {posts.map((post) => (
            <li key={post._id}>
              <img src={post.thumbnail_url} alt={post.thumbnail_url} />
            </li>
          ))}
        </Posts>
      </Container>
    </>
  );
}
