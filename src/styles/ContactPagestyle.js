import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ContactContainer = styled.div`
  color: #f5f5dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const ContactTitle = styled.h1`
  font-size: auto;
  margin-top: 1rem;

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-size: auto;
  text-align: center;
  line-height: 150%;
  max-width: 85%;
  text-align: justify;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const ContactBox = styled.div`
  max-width: 350px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputContact = styled.input`
  width: 80%;
  max-width: 300px;
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: #f5f5dc;
  border-bottom: 1px solid #fdfdc5;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  ::placeholder {
    color: #f5f5dc;
    font-style: italic;
  }
`;

export const TextAreaContact = styled.textarea`
  background-color: transparent;
  border: none;
  color: #f5f5dc;
  border-bottom: 1px solid #fdfddc;

  margin-bottom: 0.5rem;
  height: 4rem;
  padding-left: 1rem;
  font-style: italic;

  vertical-align: top;
  padding-top: -2.5rem;

  ::placeholder {
    color: #f5f5dc;
    font-style: inherit;
    padding-bottom: 1px;
    opacity: ${({ isFocused }) =>
      isFocused
        ? "0"
        : "1"}; /* controla a opacidade do placeholder com base no estado */
    transition: opacity 0.2s ease-in-out; /* adiciona uma transição suave */
  }
`;

export const BtnContact = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #c7c7a6;
  color: #1c2331;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fdfdc5;
  }
`;
export const StyledContainer = styled(ToastContainer)`
  .Toastify__progress-bar {
    background-color: #c7c7a6;
  }
`;

