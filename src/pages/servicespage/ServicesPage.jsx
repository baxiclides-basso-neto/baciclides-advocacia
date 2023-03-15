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
import AposentadoriaImg from "../../assets/images/aposentadoria.jpg";
import PericulosidadeImg from "../../assets/images/periculosidade.png.webp";
import AcaoTrabalhistaImg from "../../assets/images/acaotrabalhista.webp";
import VerbasTrabalhistaImg from "../../assets/images/verbastrabalhistas.png";
import SalarioPorForaImg from "../../assets/images/salarioporfora.jpg";
import HorasExtrasImg from "../../assets/images/horasextras.jpg";

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
    <>
      <ServicosContainer>
        <Card>
          <CardImage src={AposentadoriaImg} alt="Aposentadoria" />
          <CardContent>
            <CardTitle>Quero me aposentar</CardTitle>
            <CardDescription>
              Não sabe quanto tempo falta para se aposentar?
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={PericulosidadeImg} alt="Periculosidade" />
          <CardContent>
            <CardTitle>Periculosidade</CardTitle>
            <CardDescription>
              Quer sabe se faz jus ao adicional de periculosidade?{" "}
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={AcaoTrabalhistaImg} alt="AcaoTrabalhista" />
          <CardContent>
            <CardTitle>Ação Trabalhista</CardTitle>
            <CardDescription>
              Como entrar com uma ação trabalhista e reivindicar seus direitos.
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={VerbasTrabalhistaImg} alt="VerbasTrabalhistas" />
          <CardContent>
            <CardTitle>Verbas Trabalhistas</CardTitle>
            <CardDescription>
              Quer sabe se recebeu todas as verbas que deveria quando saiu da
              empresa?
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={SalarioPorForaImg} alt="SalarioPorFora" />
          <CardContent>
            <CardTitle>Salário por fora</CardTitle>
            <CardDescription>
              Recebo salário por fora. Quais os meus direitos?
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={HorasExtrasImg} alt="Imagem 6" />
          <CardContent>
            <CardTitle>Horas Extras</CardTitle>
            <CardDescription>
              Você faz horas extras e não está recebendo por elas?
            </CardDescription>
            <CardButton onClick={handleWhatsAppClick}>
              Fale com um Advogado
            </CardButton>
          </CardContent>
        </Card>
      </ServicosContainer>
    </>
  );
};

export default ServicesPage;
