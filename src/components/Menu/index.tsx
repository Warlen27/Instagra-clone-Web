import React, { useState, useCallback } from "react";

import { Link } from "react-router-dom";
import { Container, Button, MenuArticle, TopButton } from "./styles";
import More from "../../assets/more.svg";

type PropsMenu = {
  deletePost(): void;
  postId: string;
};

export default function Menu({ deletePost, postId }: PropsMenu) {
  const [menu, setMenu] = useState(false);

  const showMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  // function closeMenu(event) {
  //   if (!menu.contains(event.target)) {
  //     setMenu(false);
  //   }
  // }

  return (
    <Container>
      <Button type="button" onClick={showMenu}>
        <img src={More} alt="Mais..." />

        {menu ? (
          <MenuArticle>
            <TopButton type="button">
              <Link to={`/update/${postId}`}>Editar</Link>
            </TopButton>

            <button type="button" onClick={deletePost}>
              Excluir
            </button>
          </MenuArticle>
        ) : null}
      </Button>
    </Container>
  );
}
