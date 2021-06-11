import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
  contacts: [
]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeContact= (id) => {
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: id
    })
  }

  const addContact = (contact) => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: contact
    })
  }

  const editContact = (contact) => {
    dispatch({
      type: 'EDIT_CONTACT',
      payload: contact
    })
  }

  return (
    <GlobalContext.Provider value={{
      contacts: state.contacts,

      removeContact,
      addContact,
      editContact
    }}>
      {children}
    </GlobalContext.Provider>
  )
}