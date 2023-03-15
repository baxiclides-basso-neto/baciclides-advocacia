import React from "react";
import { Btn, ModalContainer, ModalContent } from "../../styles/Modalstyle";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  return (
    <ModalContainer style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <h2>Inteligências Artificiais e o Direito no Brasil</h2>
        <h3>Como a IA é usada no setor jurídico no Brasil?</h3>
        <p>Com a crescente utilização de tecnologias de Inteligência Artificial (IA), o setor jurídico no Brasil está enfrentando desafios significativos. À medida que a IA é incorporada em processos jurídicos, questões legais emergentes surgem em torno de sua regulação e uso. Este artigo examinará o papel da IA no direito no Brasil e as questões legais associadas a ela.</p>
        <h3>Introdução</h3>
        <p>A Inteligência Artificial é uma área da computação que visa imitar a inteligência humana. A IA é usada em muitas áreas, incluindo no setor jurídico. No Brasil, a IA está sendo usada em processos judiciais e administrativos. No entanto, a utilização da IA no direito no Brasil levanta questões legais importantes, como a responsabilidade por danos causados por decisões tomadas por algoritmos.</p>
        <Btn onClick={onClose}>Fechar</Btn>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
