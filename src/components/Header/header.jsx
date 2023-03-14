import React from 'react';
import { HeaderContainer, Logo, Nav } from '../../styles/Headerstyle';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderContainer>
      <Logo>Nome do escritório de advocacia</Logo>
      <Nav>
        <ul>
          <li><Link to="/">Página inicial</Link></li>
          <li><Link to="/sobre">Sobre nós</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

