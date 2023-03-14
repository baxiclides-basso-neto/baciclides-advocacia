import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-radius: 4px;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #333333;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 24px;
  }

  a {
    font-size: 18px;
    color: #333333;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #0088cc;
    }
  }
`;
