import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import CategoriesProvider from '../context/useCategory'
import { theme } from '../styles/theme'
import AuthProvider from '../context/authContext'
import FoodsContext from '../context/foodsContext'


function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <CategoriesProvider>
        <FoodsContext>
            <Header />
            <Component {...pageProps} />
        </FoodsContext>
      </CategoriesProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
