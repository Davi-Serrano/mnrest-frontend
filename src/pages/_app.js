import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import CategoriesProvider from '../context/useCategory'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CategoriesProvider>
          <Header />
      <Component {...pageProps} />
      </CategoriesProvider>
    </ChakraProvider>
  )
}

export default MyApp
