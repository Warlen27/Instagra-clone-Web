import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Story from "../Story";
import { getUsers } from "../../services/user.service";
type UserData = {
  _id: string;
  avatar_url: string;
  username: string;
};
export default function StoryList() {
  const [user, setUser] = useState<UserData[]>([]);

  useEffect(() => {
    async function getListUsers() {
      try {
        const response = await getUsers();

        setUser(response);
      } catch (error) {
        console.log(error);
      }
    }

    getListUsers();
  }, []);

  return (
    <Container className="container-story">
      {user.map((user) => (
        <Story key={user._id} user={user} />
      ))}
    </Container>
  );
}
