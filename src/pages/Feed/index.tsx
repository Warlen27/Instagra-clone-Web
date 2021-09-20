import React, { useState, useEffect } from "react";
import { giveLike, removePost, getPosts } from "../../services/post.service";
import io from "socket.io-client";
import Menu from "../../components/Menu";
import StoryList from "../../components/StoryList";
import {
  Container,
  UserInfo,
  WrapperImage,
  ContainerActions,
  Actions,
} from "./styles";
import like from "../../assets/like.svg";
import moment from "moment";
import "moment/locale/pt-br";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";
import collect from "../../assets/collect.svg";
import Header from "../../components/Header";

type AuthorData = {
  avatar_url: string;
  username: string;
};

type FeedData = {
  _id: string;
  author: AuthorData;
  thumbnail_url: string;
  likes: number;
  description: string;
  createdAt: string;
};

export default function Feed() {
  const [feed, setFeed] = useState<FeedData[]>([]);

  function handleLike(postId: string) {
    giveLike(`${postId}`);
  }

  function deletePost(postId: string) {
    removePost(`${postId}`);
  }

  /* updatePost = id => {
        api.post(`/posts/${id}/update`);
       
    }*/

  useEffect(() => {
    function registerToSocket() {
      const socket = io("http://localhost:3333");

      socket.on("post", (newPost) => {
        setFeed([newPost, ...feed]);
      });

      socket.on("like", (likedPost) => {
        setFeed(
          feed.map((post) => (post._id === likedPost._id ? likedPost : post))
        );
      });

      socket.on("delete", (deletedPost) => {
        setFeed(feed.filter((post) => post._id !== deletedPost._id));
      });

      socket.on("update", (post) => {
        setFeed([post, ...feed]);
      });
    }
    async function loadPost() {
      registerToSocket();
      const response = await getPosts();

      setFeed(response);
    }

    loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <StoryList />
        {feed.map((post, user) => (
          <article key={post._id}>
            <header>
              <UserInfo>
                <WrapperImage>
                  {" "}
                  <img src={post.author.avatar_url} alt="author" />{" "}
                </WrapperImage>
                <span>{post.author.username}</span>
              </UserInfo>

              <Menu deletePost={() => deletePost(post._id)} postId={post._id} />
            </header>

            <img src={post.thumbnail_url} alt="" />
            <footer>
              <ContainerActions>
                <Actions>
                  <button type="button" onClick={() => handleLike(post._id)}>
                    <img src={like} alt="" />
                  </button>
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </Actions>
                <img src={collect} alt="" />
              </ContainerActions>
              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}

                <span>
                  {moment(post.createdAt)
                    .locale("pt-br")
                    .startOf("minutes")
                    .fromNow()}
                </span>
              </p>
            </footer>
          </article>
        ))}
      </Container>
    </>
  );
}
