import Modal from "styled-react-modal";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";

const Divider = styled.div`
  width: 432px;
  height: 2px;
  border-bottom: 1px solid var(--cloudy-blue);
`;

const ModalContent = styled.div`
  padding: 6px 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  line-height: 2rem;
  input {
    width: 384px;
    height: 32px;
    border-radius: 4px;
    border: solid 1px var(--cloudy-blue);
    background-color: var(--white-two);
    :last-child {
      width: 200px;
    }
    :focus {
      outline: none;
    }
  }
`;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  span {
    width: 56px;
    height: 16px;
    margin: 23px 16px 8px 120px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #fa7268;
    cursor: pointer;
  }
  button {
    color: var(--white);
    width: 72px;
    height: 32px;
    margin: 15px 16px 0;
    padding: 8px 16px;
    opacity: 1;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: #fa7268;
    cursor: pointer;
    :disabled {
      opacity: 0.3;
    }
  }
`;
const StyledModal = Modal.styled`
width: 432px;
height: 342px;
border-radius: 16px;
  display: block;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--white-two);
  p{
    height: 19px;
    padding: 0px 12px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
}
  ;`;

export default function EditModal(props) {
  const { editContact, contacts } = useContext(GlobalContext);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedContact, setSelectedContact] = useState({
    id: "",
    contact,
    email,
    phone,
  });

  let currentContactId = contacts.find((e) => {
    return e.id;
  });

  useEffect(() => {
    const selectedContact = contacts.find(
      (contact) => contact.id == currentContactId
    );
    console.log("esse é o contato selecionado: " + selectedContact);
    setSelectedContact({
      id: currentContactId.id,
      contact: contact,
      email: email,
      phone: phone,
    });
  }, [contact, email, phone]);

  const onChange = (e) => {
    setContact(e.target.value);
  };

  const onChangeE = (e) => {
    setEmail(e.target.value);
  };

  const onChangeP = (e) => {
    setPhone(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editContact(selectedContact);
  };

  return (
    <>
      <StyledModal
        isOpen={props.isOpen}
        onBackgroundClick={props.toggleModal}
        onEscapeKeydown={props.toggleModal}
      >
        <p>Editar Contato</p>
        <Divider />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <label>Nome</label>
            <input
              type="text"
              value={contact}
              onChange={onChange}
              name="contact"
            ></input>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={onChangeE}
              name="email"
            ></input>
            <label>Telefone</label>
            <input
              type="text"
              value={phone}
              onChange={onChangeP}
              name="phone"
            ></input>
            <button type="submit">Salvar</button>
          </form>
        </ModalContent>
        <Divider style={{ marginTop: 10 }} />
        <ModalFooter>
          <span onClick={props.toggleModal}>Cancelar</span>
        </ModalFooter>
      </StyledModal>
    </>
  );
}
