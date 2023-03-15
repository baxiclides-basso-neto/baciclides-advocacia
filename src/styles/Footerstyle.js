import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #dee2e6;
  padding: 1rem 0.7rem;
  text-align: center;
  color: #fff;

 
`;

export const ContextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 769px) {
    padding: 1rem 1rem;
  }
`;

export const FooterTextBox = styled.div``;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.5rem;
  align-self: center;

  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  font-size: 0.5rem;
  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

export const ContactText = styled.p`
  margin: 0;
`;

export const EmailLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 5px;
`;

export const PhoneNumber = styled.span`
  margin-left: 5px;
`;
