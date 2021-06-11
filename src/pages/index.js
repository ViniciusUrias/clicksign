
import EmptyList from '../components/EmptyList'
import Layout from '../components/Layout'
import List from '../components/List';
import {GlobalContext} from '../context/GlobalState';
import { useContext, useEffect } from 'react';
function App(){
  const { contacts } = useContext(GlobalContext);

  
console.log(contacts)

  useEffect(() => {
    
  })
    
  
return (
  <>

    <Layout>
      {contacts.length > 0 ?( <List key={contacts.map(contact=> contacts[contact])}/>) :  (<EmptyList/>)
} 

     
    </Layout>
    </>

  );
}

export default App;
