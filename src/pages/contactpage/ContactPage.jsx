import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactText,
  ContactForm,
  Description,
  InputContact,
  ContactBox,
} from "../../styles/ContactPagestyle";

function ContactPage() {
  return (
    <ContactContainer>
      <ContactTitle>Entre em contato conosco</ContactTitle>
      <Description>
        Entre em contato conosco e esclareça suas dúvidas sobre questões
        jurídicas. Nossos advogados são especializados em Direito Trabalhista,
        Civil e Criminal, e estão prontos para ajudar em casos de litígio ou
        assessoria jurídica preventiva. Atendemos de forma personalizada e
        ética, buscando sempre as melhores soluções para nossos clientes. Agende
        uma consulta e saiba como podemos ajudá-lo.
      </Description>
      <ContactText>
        Preencha o formulário abaixo e entraremos em contato o mais breve
        possível.
      </ContactText>
      <h3>Contato</h3>

      <ContactBox>
        <ContactForm>
          <InputContact type="text" placeholder="Digite o seu nome" />
          <InputContact type="text" placeholder="Digite o seu e-mail" />

          <textarea name="" id="" cols="30" rows="10">
            Digite a sua mensagem
          </textarea>
          <button>Enviar</button>
        </ContactForm>
      </ContactBox>
    </ContactContainer>
  );
}

export default ContactPage;
