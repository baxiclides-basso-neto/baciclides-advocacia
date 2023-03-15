import React from "react";
import {
  MainContainer,
  Title,
  Subtitle,
  Paragraph,
  CallToAction,
  ServicesList,
  
  
} from "../../styles/LandingPagestyle";

const LandingPage = () => {
  function handleWhatsAppClickLandingPage() {
    const phoneNumber = "5517991843732";
    const message =
      "Olá, gostaria de falar sobre os seus serviços de advocacia";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  return (
    <>
  
      <MainContainer>
        <Title>Baciclides Basso Jr - Sociedade Individual de Advocacia</Title>
        <Subtitle>Quem somos</Subtitle>
        <Paragraph>
          Somos um escritório de advocacia especializado em direito civil,
          previdenciário, e trabalhista. Com 35 anos de experiência e uma equipe
          de advogados qualificados, estamos prontos para ajudar você e sua
          empresa em todas as questões jurídicas.
        </Paragraph>
        <Subtitle>Serviços</Subtitle>
        <Paragraph>
          Oferecemos uma ampla gama de serviços jurídicos para atender às
          necessidades de nossos clientes, incluindo:
        </Paragraph>
        <ServicesList>
        
          <li>
            <Paragraph>Direito previdenciário</Paragraph>
          </li>
          <li>
            <Paragraph>Direito trabalhista</Paragraph>
          </li>
          <li>
            <Paragraph>Propriedade intelectual</Paragraph>
          </li>
          <li>
            <Paragraph>Resolução de conflitos</Paragraph>
          </li>
        
        </ServicesList>
        <CallToAction onClick={handleWhatsAppClickLandingPage}>
          Entre em contato
        </CallToAction>
      </MainContainer>
  
    </>
  );
};

export default LandingPage;
