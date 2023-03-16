import React from "react";
import {
  ServicosContainer,
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  CardButton,
} from "../../styles/ServicesPagestyle";
import { CardsArray } from "../../helpers/ServicesList";

const ServicesPage = () => {
  function handleWhatsAppClick() {
    const phoneNumber = "5517991843732";
    const message =
      "Olá, gostaria de falar sobre os seus serviços de advocacia";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <ServicosContainer>
      {CardsArray.map((card) => (
        <Card key={card.id}>
          <CardImage image={card.image} />
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>
      ))}
    </ServicosContainer>
  );
};

export default ServicesPage;
