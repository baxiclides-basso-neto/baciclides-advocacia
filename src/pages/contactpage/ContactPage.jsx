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
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { send } from "emailjs-com";
import { StyledContainer } from "../../styles/ContactPagestyle";

function ContactPage() {
  const [isFocused, setIsFocused] = useState();
  const { register, handleSubmit, reset } = useForm();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const onSubmitForm = async (data) => {
    await sendEmail(data);
  };

  async function sendEmail(data) {
    try {
      const templateParams = {
        from_name: data.name,
        message: data.message,
        email: data.email,
      };
      await send(
        "service_ey9xrlo",
        "template_oembkg5",
        templateParams,
        "UK3LUCDcldJIda31B"
      );
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (e) {
      console.error(e);
      toast.error("Ocorreu um erro ao enviar a mensagem.");
    }
  }

  return (
    <><ContactContainer>
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
        <ContactForm onSubmit={handleSubmit(onSubmitForm)}>
          <InputContact
            type="text"
            placeholder="Digite o seu nome"
            {...register("name")}
            required />
          <InputContact
            type="text"
            placeholder="Digite o seu e-mail"
            {...register("email")}
            required />
          <TextAreaContact
            onFocus={handleFocus} /* adiciona o handler onFocus */
            onBlur={() => setIsFocused(false)} /* adiciona o handler onBlur para quando o textarea perde o foco */
            isFocused={isFocused} /* passa o estado como propriedade para o styled component */
            placeholder="Digite sua mensagem aqui..."
            {...register("message")}
            required />
          <BtnContact type="submit">Enviar</BtnContact>
        </ContactForm>
      </ContactBox>
    </ContactContainer>
    <StyledContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" /></>
  );
}

export default ContactPage;
