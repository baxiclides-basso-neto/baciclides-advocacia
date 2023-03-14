import { Link } from "react-router-dom";
import styled from "styled-components";
import BgImgPic from "../assets/images/bgimg.avif";

export const BgImg = styled.div`
  background-image: url(${BgImgPic});
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MainContainer = styled.main`
  max-width: 1200px;
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
  margin-bottom: 1rem;
`;

export const CallToAction = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #8bc34a;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #689f38;
  }
`;
