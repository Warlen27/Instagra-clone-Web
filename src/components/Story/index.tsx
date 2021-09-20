import React from "react";

import { Container, WrapperImage } from "./styles";

type UserData = {
  avatar_url: string;
  username: string;
};

type User = {
  user: UserData;
};

export default function Story({ user }: User) {
  return (
    <Container>
      <WrapperImage>
        <img src={user.avatar_url} alt="avatar" />
      </WrapperImage>
      <span>{user.username}</span>
    </Container>
  );
}
