import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #f5f5dc;
  align-items: center;
  padding: 0.5rem;
`;

export const ContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;

  @media (max-width: 768px) {
    /* telas menores que 768px */
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin-right: 1rem;
  }

  a {
    font-size: 18px;
    color: #f5f5dc;

    text-decoration: none;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      color: #1c2331;
      background-color: #fdfdc5;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    li {
      margin-right: 1.5rem;
    }

    a {
      font-size: 16px;
    }
  }
`;
