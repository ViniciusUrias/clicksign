
import EmptyList from '../components/EmptyList'
import Layout from '../components/Layout'
import List from '../components/List';
import {GlobalContext} from '../context/GlobalState';
import { useContext, useEffect } from 'react';
function App(){
  const { contacts } = useContext(GlobalContext);


return (
  <>

    <Layout>
      {contacts.length > 0 ?( <List/>) :  (<EmptyList/>)
} 

     
    </Layout>
    </>

  );
}

export default App;
