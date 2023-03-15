import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #dee2e6;
  padding: 15px;
  text-align: center;
  color: #fff;
`;

export const ContextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  align-self: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 10px;
`;

export const ContactText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const EmailLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 5px;
`;

export const PhoneNumber = styled.span`
  margin-left: 5px;
`;
