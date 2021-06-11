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
    case 'EDIT_CONTACT':{
      const updateContact = action.payload;

      const updatedContacts = state.contacts.map(c => {
        if(c.id === updateContact.id){
          return updateContact
        }

        return c;
      })
      return{
        ...state,
        contacts: updatedContacts
      }
      // const updateContacts = state.contacts.filter((contact => {
      //   return contact.id === action.payload.id
      // }))
      // return {
      //   ...state,
      //   contacts: [ ...updateContacts, ...state.contacts]
        
      // }
    }

    default:
      return state;
  }
}

export default Reducer