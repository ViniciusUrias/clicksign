  
import { createContext, useContext, useState } from 'react';

// context
const ModalContext = createContext({});

// Provider
const ModalProvider = ({ children }) => {
  const [modalState, setState] = useState({ visible: false });

  const openModal = () =>
    setState({ visible: true });
  const closeModal = () => setState({ visible: false });
  const onSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Math.floor(Math.random() * 10000),
      contact,
      email,
      phone
    }
    addContact(newContact)
    {closeModal}
    ;
  }

  return (
    <ModalContext.Provider
      value={{ modalState, openModal, closeModal, onSubmit }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };