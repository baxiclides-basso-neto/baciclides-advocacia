import styled from 'styled-components';


export const MainContainer = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const CallToAction = styled.a`
  display: inline-block;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #0088CC;
  color: #FFFFFF;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005999;
  }
`;