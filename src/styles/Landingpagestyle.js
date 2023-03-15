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
  margin-top: .5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fdfdc5;
  }
`;

export const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  color: #fdfdc5; ;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-top: .2rem;
`;

export const CardDescription = styled.p`
  margin-top: 0;
`;

export const CardButton = styled.button`

  
  padding: 0.5rem .5rem;
  border: none;
  border-radius: 4px;
  background-color: #c7c7a6;
  color: #1c2331;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fdfdc5;
  }
`;
