import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #f5f5dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ContactTitle = styled.h1`
  font-size: auto;

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-size: auto;
  text-align: center;
  line-height: 150%;
  max-width: 90%;
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
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  max-width: 90%;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  margin: 0 auto;
  width: 90%;
`;

export const InputContact = styled.input`
  width: 80%;
  max-width: 300px;
  padding: 1rem;
`;
