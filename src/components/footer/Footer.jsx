import React from "react";
import {
  FooterWrapper,
  EmailLink,
  ContactText,
  ContactInfo,
  FooterText,
  PhoneNumber,
  ContextWrapper,
  FooterTextBox,
} from "../../styles/Footerstyle";

function Footer() {
  return (
    <FooterWrapper>
      <ContextWrapper>
        <FooterTextBox>
        <FooterText>
          Direitos Autorais © 2023 - Todos os direitos reservados.
        </FooterText>
        </FooterTextBox>
        <ContactInfo>
          
          <ContactText>
            <EmailLink href="mailto:contato@exemplo.com">
              contato@exemplo.com
            </EmailLink>
          </ContactText>
          <ContactText>
            Telefone:<PhoneNumber>(00) 0000-0000</PhoneNumber>
          </ContactText>
        </ContactInfo>
      </ContextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
