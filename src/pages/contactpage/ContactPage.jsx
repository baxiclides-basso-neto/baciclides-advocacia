import React, { useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactText,
  ContactForm,
  Description,
  InputContact,
  ContactBox,
  TextAreaContact,
  BtnContact,
} from "../../styles/ContactPagestyle";

function ContactPage() {
  const [isFocused, setIsFocused] = useState();

  const handleFocus = () => {
    setIsFocused(true);
  };
  
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

      <ContactBox>
        <ContactForm>
          <InputContact type="text" placeholder="Digite o seu nome" />
          <InputContact type="text" placeholder="Digite o seu e-mail" />
          <TextAreaContact
            onFocus={handleFocus} /* adiciona o handler onFocus */
            onBlur={() =>
              setIsFocused(false)
            } /* adiciona o handler onBlur para quando o textarea perde o foco */
            isFocused={
              isFocused
            } /* passa o estado como propriedade para o styled component */
            placeholder="Digite sua mensagem aqui..."
          />
          <BtnContact>Enviar</BtnContact>
        </ContactForm>
      </ContactBox>
    </ContactContainer>
  );
}

export default ContactPage;
