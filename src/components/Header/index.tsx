import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HeaderContent,
  LeftContent,
  Separator,
  HeightContent,
} from "./styles";
import logopart1 from "../../assets/logo-part1.svg";
import logopart2 from "../../assets/logo@2x.png";
import camera from "../../assets/camera.svg";
import profile from "../../assets/profile.svg";

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <Link to="/feed">
          <LeftContent>
            <img src={logopart1} alt="Meu Insta" />
            <Separator />
            <img src={logopart2} id="logo2" alt="Meu Insta" />
          </LeftContent>
        </Link>
        <HeightContent>
          <Link to="/new">
            <img src={camera} alt="Enviar publicações" />
          </Link>

          <Link to="/profile">
            <img src={profile} alt="perfil" />
          </Link>
        </HeightContent>
      </HeaderContent>
    </Container>
  );
}
