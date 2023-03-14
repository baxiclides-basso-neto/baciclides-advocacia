import styled from "styled-components";

export const ServicosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
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
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export const CardButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #8bc34a;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #689f38;
  }
`;
