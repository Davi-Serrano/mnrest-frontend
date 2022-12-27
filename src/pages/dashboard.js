import {useContext} from "react"
import { Flex } from "@chakra-ui/react"
import Head from 'next/head'
import NextLink  from "next/link"
import { singOut } from '../context/authContext'
import  { withSSRGuest  } from "../utils/withSSRGuest"
import { setupApiClient } from "../services/api"

export default function Dashboard() {    
    return (
        <Flex  
            justify="center"
            align="center"
        > 
            <Head>
                <title>Cardápio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex 
                justify="center"
                align="center" 
                height="90vh" 
                flexWrap="wrap"
            >
                
                
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
                    <NextLink href="/auth/delete-category" passHref> Deletar categoria </NextLink>  
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

                <Flex
                    justify="center"
                    align="center"
                    bg="#000" 
                    color="#fff"
                    width="200px"
                    h="80px"
                    ml="1em"
                    onClick={()=> singOut()}
                    _hover={{
                        cursor: "pointer",
                        opacity: ".8"
                    }}
                >
                     Sair
                </Flex>
            </Flex>
      </Flex>
    )
  }
  
  export const getServerSideProps = withSSRGuest(async(ctx)=>{
     setupApiClient(ctx)

    return {
        props:{}
    }
})