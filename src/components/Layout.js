import Header from './Header'
import styled from 'styled-components';


const Body = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #f8f9fd;
`;

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;


`;

export default function Layout({children}){

    return(
        <Body>
           <Header/>
           <Container>
           {children}
           </Container>
           
        </Body>
    )
}