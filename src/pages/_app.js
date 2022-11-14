import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import CategoriesProvider from '../context/useCategory'
import { theme } from '../styles/theme'
import AuthProvider from '../context/authContext'

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <CategoriesProvider>
          <Header />
          <Component {...pageProps} />
      </CategoriesProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
