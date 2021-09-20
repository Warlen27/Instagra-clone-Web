import React, { useState /*useMemo*/ } from "react";
import { Link, useHistory } from "react-router-dom";
import { createUser } from "../../services/user.service";

// import "./Styles.ts";
import { Container, Content, Form, Footer, RegisterText } from "../../Form";
import logo from "../../assets/logo@2x.png";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await createUser({
        name,
        username,
        email,
        password,
      });
      const user = response;

      if (user) {
        history.push("/login");
      }
    } catch (err) {
      console.log("erro" + err);
    }
  }

  return (
    <Container>
      <span style={{ backgroundImage: `url(${logo})` }}></span>
      <Content>
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="text"
            id="username"
            placeholder="Nome do usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit"> Cadastre-se </button>
        </Form>
      </Content>
      <Footer>
        <RegisterText>
          Tem uma conta?
          <Link to="/login">
            <span>Conecte-se</span>
          </Link>
        </RegisterText>
      </Footer>
    </Container>
  );
}
