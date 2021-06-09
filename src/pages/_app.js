import '../styles/globals.css'
import {GlobalProvider} from '../context/GlobalState'
import {ModalProvider} from 'styled-react-modal'

function MyApp({ Component, pageProps }) {
  return(
  <GlobalProvider>
  <ModalProvider>

   <Component {...pageProps} />
   </ModalProvider>

   </GlobalProvider>
  )
}

export default MyApp
