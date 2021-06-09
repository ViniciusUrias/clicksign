const Reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        })
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      }
    case 'EDIT_CONTACT':
      const updateContact = action.payload;

      const updateContacts = state.contacts.map(contact => {
        if (contact.id === updateContact.id) {
          return updateContact;
        }
        return contact;
      })
      return {
        ...state,
        contacts: updateContacts
      }

    default:
      return state;
  }
}

export default Reducer