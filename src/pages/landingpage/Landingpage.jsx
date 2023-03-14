import React from 'react'
import { MainContainer, Title, Subtitle, Paragraph, CallToAction } from '../../styles/Landingpagestyle'

const LandingPage = () => {
  return (
    <>
    
    <MainContainer>
      <Title>Baciclides Basso Jr - Sociedade Individual de Advocacia</Title>
      <Subtitle>Quem somos</Subtitle>
      <Paragraph>
        Somos um escritório de advocacia especializado em direito empresarial e trabalhista. Com anos de experiência e uma equipe de advogados qualificados, estamos prontos para ajudar você e sua empresa em todas as questões jurídicas.
      </Paragraph>
      <Subtitle>Serviços</Subtitle>
      <Paragraph>
        Oferecemos uma ampla gama de serviços jurídicos para atender às necessidades de nossos clientes, incluindo:
      </Paragraph>
      <ul>
        <li><Paragraph>Direito empresarial</Paragraph></li>
        <li><Paragraph>Direito trabalhista</Paragraph></li>
        <li><Paragraph>Propriedade intelectual</Paragraph></li>
        <li><Paragraph>Resolução de conflitos</Paragraph></li>
      </ul>
      <CallToAction href="#">Entre em contato</CallToAction>
    </MainContainer>
  </>
  )
}

export default LandingPage