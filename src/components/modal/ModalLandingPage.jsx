import React from "react";
import { Btn, ModalContainer, ModalContent } from "../../styles/Modalstyle";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  return (
    <ModalContainer style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <Btn onClick={onClose}>X</Btn>
        <h2>Inteligências Artificiais e o Direito no Brasil</h2>

        <p>
          Com a crescente utilização de tecnologias de Inteligência Artificial
          (IA), o setor jurídico no Brasil está enfrentando desafios
          significativos. À medida que a IA é incorporada em processos
          jurídicos, questões legais emergentes surgem em torno de sua regulação
          e uso. Este artigo examinará o papel da IA no direito no Brasil e as
          questões legais associadas a ela.
        </p>

        <p>
          A Inteligência Artificial é uma área da computação que visa imitar a
          inteligência humana. A IA é usada em muitas áreas, incluindo no setor
          jurídico. No Brasil, a IA está sendo usada em processos judiciais e
          administrativos. No entanto, a utilização da IA no Direito no Brasil
          levanta questões legais importantes, como a responsabilidade por danos
          causados por decisões tomadas por algoritmos.
        </p>
        <h3>Como a IA é usada no setor jurídico no Brasil?</h3>
        <p>
          A IA está sendo usada em muitos aspectos do setor jurídico no Brasil.
          A seguir, apresentamos algumas das áreas onde a IA está sendo
          utilizada.
        </p>
        <ul>
          <li>
            <h4>Análise de contratos</h4>
            <p>
              A IA é usada na análise de contratos, identificando cláusulas e
              condições importantes. A análise de contratos por meio da IA
              permite que advogados e empresas economizem tempo e aumentem a
              precisão na revisão de documentos.
            </p>
          </li>
          <li>
            <h4>Análise de dados</h4>
            <p>
              A IA é usada para análise de dados em processos judiciais e
              administrativos. A análise de dados por meio da IA pode ajudar os
              advogados a identificar tendências e padrões que possam ser
              relevantes para um caso.
            </p>
          </li>
          <li>
            <h4>Assitência jurídica</h4>
            <p>
              A IA pode ser usada na prestação de assistência jurídica. Os
              chatbots são uma forma de IA usada para fornecer informações
              legais e orientações para os usuários. A IA também pode ser usada
              para auxiliar advogados em suas tarefas diárias, como a
              organização de documentos e o acompanhamento de prazos.
            </p>
          </li>
        </ul>
        <h3>Questões legais associadas à IA no direito no Brasil</h3>
        <p>
        A IA está mudando a maneira como o setor jurídico no Brasil funciona. No entanto, a sua utilização levanta questões legais importantes.
        </p>
        <ul>
          <li>
            <h4>Responsabilidade por danos causados por algoritmos</h4>
            <p>
            Um dos principais desafios legais da utilização da IA no Direito no Brasil é a responsabilidade por danos causados por algoritmos. Como a IA é usada em processos judiciais e administrativos, as decisões tomadas por algoritmos podem afetar significativamente os resultados de um caso. Se um algoritmo toma uma decisão que causa danos a um indivíduo ou empresa, quem é responsável por esses danos? Os tribunais brasileiros ainda não definiram claramente a responsabilidade nesses casos.
            </p>
          </li>
          <li>
            <h4>Violação da privacidade</h4>
            <p>
            Outra questão legal associada à IA no Direito no Brasil é a violação da privacidade. A IA é usada para análise de dados em processos judiciais e administrativos. Se os dados pessoais de um indivíduo são usados sem o seu consentimento, isso pode ser considerado uma violação de privacidade.
            </p>
          </li>
          <li>
            <h4>Discriminação algorítmica</h4>
            <p>
            A IA pode reproduzir e ampliar a discriminação humana. Isso é conhecido como discriminação algorítmica. Se um algoritmo é programado com preconceitos, ele pode tomar decisões que discriminam grupos específicos. Isso é particularmente problemático no sistema jurídico, onde a discriminação algorítmica pode afetar negativamente o tratamento justo e igualitário.
            </p>
          </li>
          <li>
            <h4>Falta de transparência</h4>
            <p>
            A falta de transparência dos algoritmos usados no direito no Brasil também é uma questão importante. Os algoritmos são frequentemente considerados caixas-pretas, pois seus processos de tomada de decisão não são divulgados ao público. Isso levanta questões sobre como as decisões são tomadas e como a justiça é garantida
            </p>
          </li>
          <li>
            <h4>Regulação da IA no direito no Brasil</h4>
            <p>
            A regulação da IA no direito no Brasil ainda é um desafio. Atualmente, não há uma legislação clara que regule o uso da IA no setor jurídico. Isso significa que muitas das questões legais associadas à IA no Direito no Brasil ainda não foram abordadas.
            </p>
          </li>
        </ul>
        <h3>Conclusão</h3>
        <p>A utilização da Inteligência Artificial no Direito no Brasil está mudando a forma como o setor jurídico funciona. No entanto, ainda levanta questões legais.</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
