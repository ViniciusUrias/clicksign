
import EmptyList from '../components/EmptyList'
import Layout from '../components/Layout'
import {ModalProvider} from 'styled-react-modal'
import List from '../components/List';
import {GlobalContext} from '../context/GlobalState';
import { useContext, useEffect } from 'react';
function App(){
  const { contacts } = useContext(GlobalContext);

useEffect(() => {
  [...contacts]
}, [contacts])
 
return (

  <ModalProvider>

    <Layout>
      {contacts.length > 0 ?( <List/>) :  (<EmptyList/>)
} 

     
    </Layout>
    </ModalProvider>

  );
}

export default App;
