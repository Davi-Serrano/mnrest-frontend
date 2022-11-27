import {useContext} from "react"
import { Flex } from "@chakra-ui/react"
import Head from 'next/head'
import NextLink  from "next/link"
import { AuthContext } from '../context/authContext'
import  { withSSRGuest  } from "../utils/withSSRGuest"
import { setupApiClient } from "../services/api"

export default function Dashboard() {
  
    const { isAuthenticated, user } = useContext(AuthContext);

    console.log('isAuthenticated :>> ', isAuthenticated);

    
    return (
        <Flex width="400px" margin="auto" mt="1em"> 
            <Head>
                <title>Cardápio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex height="350px" flexWrap="wrap" width="350px">
                
                
                <Flex
                    justify="center"
                    align="center"
                    bg="#000" 
                    color="#fff"
                    width="200px"
                    h="80px"
                    ml="1em"
                >
                   <NextLink href="/auth/add-new-food" passHref> Criar novo item </NextLink>  
                </Flex>

                <Flex
                    justify="center"
                    align="center"
                    bg="#000" 
                    color="#fff"
                    width="200px"
                    h="80px"
                    ml="1em"
                >
                    <NextLink href="/auth/add-new-category" passHref> Criar nova categoria </NextLink>  
                </Flex>

                <Flex
                    justify="center"
                    align="center"
                    bg="#000" 
                    color="#fff"
                    width="200px"
                    h="80px"
                    ml="1em"
                >
                    <NextLink href="/auth/edit-menu" passHref> Editar Menu </NextLink>  
                </Flex>
            </Flex>
      </Flex>
    )
  }
  
  export const getServerSideProps = withSSRGuest(async(ctx)=>{
    const apiClient = setupApiClient(ctx)

    return {
        props:{}
    }
})