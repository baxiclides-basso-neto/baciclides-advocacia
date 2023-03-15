import React from 'react';
import { ContactContainer, ContactTitle, ContactText, ContactForm, Description } from '../../styles/ContactPagestyle';

function ContactPage() {
  return (
    <ContactContainer>
      <ContactTitle>Entre em contato conosco</ContactTitle>
      <Description>Entre em contato conosco e esclareça suas dúvidas sobre questões jurídicas. Nossos advogados são especializados em Direito Trabalhista, Civil e Criminal, e estão prontos para ajudar em casos de litígio ou assessoria jurídica preventiva. Atendemos de forma personalizada e ética, buscando sempre as melhores soluções para nossos clientes. Agende uma consulta e saiba como podemos ajudá-lo.</Description>
      <ContactText>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</ContactText>
      <ContactForm>
        {/* Aqui vai o formulário de contato */}
      </ContactForm>
    </ContactContainer>
  );
}

export default ContactPage;
