import React from 'react';
import { HeaderContainer, Logo, Nav } from '../../styles/Headerstyle';

function Header() {
    return (
        
      <HeaderContainer>
        <Logo>Nome do escritório de advocacia</Logo>
        <Nav>
          <ul>
            <li><a href="#">Página inicial</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </Nav>
      </HeaderContainer>
    );
  }
  
  export default Header;
