import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #f5f5dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const ServicesList = styled.ul`
  margin-top: 0;
`;

export const CallToAction = styled(Link)`
  display: inline-block;
  max-width: 150px;
  text-align: center;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #c7c7a6;
  color: #1c2331;
  font-size: 18px;
  text-decoration: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fdfdc5;
  }
`;
