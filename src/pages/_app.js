import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import FoodsProvider from '../context/useFoods'
import CategoriesProvider from '../context/useCategory'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CategoriesProvider>
        <FoodsProvider>
          <Header />
        </FoodsProvider>
      <Component {...pageProps} />
      </CategoriesProvider>
    </ChakraProvider>
  )
}

export default MyApp
