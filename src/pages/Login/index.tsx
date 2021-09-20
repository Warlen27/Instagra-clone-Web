import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Container, Content, Form, Footer, RegisterText } from "../../Form";

import { signIn } from "../../services/auth.service";
import { getUserById } from "../../services/user.service";

import logo from "../../assets/logo@2x.png";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await signIn({ email, password });

      const { _id } = response.data;

      const res = await getUserById(_id);

      const profile = res.data;

      if (_id) {
        localStorage.setItem("userId", _id);
        localStorage.setItem("profile", JSON.stringify(profile));
        history.push("/feed");
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
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="btn">
            Entrar
          </button>
        </Form>
      </Content>

      <Footer>
        <RegisterText>
          Não tem uma conta?
          <Link to="/">
            <span>Cadastre-se</span>
          </Link>
        </RegisterText>
      </Footer>
    </Container>
  );
}

export default Login;
