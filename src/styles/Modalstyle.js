import styled from "styled-components";

export const ModalContainer = styled.div`
  color: #1c2331;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  height: 200px;
`;

export const ModalContent = styled.div`
  background-color: #fdfdc5;
  padding: 20px;
  border-radius: 5px;
`;

export const Btn = styled.button`
  padding: 6px 15px;
  border: none;
  border-radius: 4px;
  color: #1c2331;
`;
