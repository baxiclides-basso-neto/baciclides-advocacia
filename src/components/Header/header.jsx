import React from "react";
import {
  ContextContainer,
  HeaderContainer,
  Logo,
  Nav,
} from "../../styles/Headerstyle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <ContextContainer>
        <Logo>Logotipo do escritório</Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">Página inicial</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </Nav>
      </ContextContainer>
    </HeaderContainer>
  );
}

export default Header;
