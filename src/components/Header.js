import { useState } from "react";
import styled from "styled-components";
import Modal from './Modal'

const HeaderNav = styled.header`
  width: 100%;
  height: 64px;
  align-items: center;
  padding: 16px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 148px;
  height: 32px;
  object-fit: contain;
`;

const Input = styled.input`
  position: static;
  width: 70vw;
  height: 32px;
  padding: 7px 8px 6px;
  border:none;
  border-radius: 4px;
  background-color: var(--pale-lilac);
  background-image: url("ic-search.svg");
  background-repeat: no-repeat;
  background-position: 99%;
  background-size: 16px;
`;

const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
  align-items: center;
  
  margin: 0 8px 0 0;
  object-fit: contain;
`;

const Button = styled.button`

  align-items: center;
  width: 220px;
  height: 39px;
  margin: 0 24px 0 ;
  padding: 8px 22px 8px 16px;
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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  return (
    <HeaderNav>
      <Modal toggleModal={toggleModal} isOpen={isOpen} />
      <Logo src="ic-logo.svg"></Logo>
      <Button onClick={toggleModal}>
      <PlusIcon src="ic-plus.svg" />
      <span>Criar Contato</span>
      </Button>
      <Input placeholder="Buscar"></Input>
    </HeaderNav>
  );
}

export default Header;
