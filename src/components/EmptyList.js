import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import Modal from "./Modal";

const Container = styled.div`
  width: 237px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 238px;
    height: 19px;
    margin: 24px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;

    text-align: center;
    color: var(--dark);
  }
`;

const ImageContainer = styled.img`
  margin-top: 25%;
`;
const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
  align-items: center;
  margin: 0 8px 0 0;
  object-fit: contain;
`;
const CreateContactButton = styled.button`
  width: 144px;
  height: 40px;
  margin: 24px 47px 0;
  padding: 10px 22px 12px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  background-color: var(--light-yellowish-green);
  color: #fa7268;
  cursor: pointer;
  span {
    font-size: 13px;
    padding-bottom: 20px;
  }
`;

function EmptyList() {
  const { contacts } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  console.log(contacts)
  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  return (
    <Container>
      <ImageContainer src="ic-book.svg"></ImageContainer>
      <p>Nenhum contato foi criado ainda</p>
      <CreateContactButton onClick={toggleModal}>
        <PlusIcon src="ic-plus.svg" />
        <span>Criar Contato</span>
      </CreateContactButton>
      <Modal toggleModal={toggleModal}  isOpen={isOpen} />
    </Container>
  );
}

export default EmptyList;
