import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #f5f5dc;

  @media (max-width: 768px) {
    /* telas menores que 768px */
    padding: 8px;
  }
`;

export const ContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    /* telas menores que 1200px */
    padding: 12px;
  }

  @media (max-width: 768px) {
    /* telas menores que 768px */
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
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
  }

  li {
    margin-left: 24px;
  }

  a {
    font-size: 18px;
    color: #f5f5dc;
    padding: 4px;

    text-decoration: none;
    transition: background-color 0.5s ease-in-out;


    &:hover {
      color: #1c2331;
      background-color:  #fdfdc5;
      border-radius: 4px;
      
    }
  }

  @media (max-width: 768px) {
    /* telas menores que 768px */
    ul {
      flex-direction: column;
    }

    li {
      margin-left: 0;
      margin-bottom: 8px;
    }

    a {
      font-size: 16px;
    }
  }
`;
