import { Flex } from "@chakra-ui/react"
import Head from 'next/head'
import NextLink  from "next/link"

export default function Dashboard() {
  
    
  
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
  
  