import styled from "styled-components";

export const Container = styled.div`
  color: #f5f5dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  max-width: 1200px;
  margin: 0 auto;

`;

export const Title = styled.h1`
  font-size: auto;

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-size: auto;
  text-align: center;
  line-height: 150%;
  width: 85%;
  text-align: justify;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;
