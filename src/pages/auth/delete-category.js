import { Flex, Button, Text, useToast } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"
import { returnToDashBoard } from '../../reuse'



export default function DeleteCategory({categories}) {
  const toast = useToast()

  async function handleSubmitDeleteCategory(category_id){
    await api.delete("/category", {data: {category_id}}).then(()=> 
              toast({
                  title: "Categoria deletada com sucesso!",
                  status: "success",
                  position: "top",
                  duration: 4000, // 2seconds
                  isClosable: true,
              }), 

              setTimeout(returnToDashBoard(), 2000) // 2seconds
              ).catch((err)=>
                  toast({
                      title: 'Erro ao exclui a categoria!',
                      description: err.response.data.message,
                      status: 'error',
                      duration: 3000, //3 seconds
                      isClosable: true,
                      position: "top"
                  })
              )
  }

  return (
    <Flex justify="center" mt="2em">
      <Head>
        <title>Excluir categoria </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex  
        flexDir="column"
        align="center" 
        justify="center"         
        color="black"
      >
        {
          categories.map(categorie=> 
           <Flex
           align="center"
            bg="#E88B00"
            key={categorie.id}
            border="1px solid white "
            borderRadius="10"
            my="0.5em"
            px="1em"
           >

              <Text
                my="1em"
                w="100px"
                fontWeight="bold"
                color="#fff"
              >
                {categorie.name} 
              </Text> 
              
              <Button 
                    bg="red" 
                    color="#fff"
                    my="1em"
                    onClick={()=>handleSubmitDeleteCategory(categorie.id)}
                    _hover={{
                    opacity: .8,
                    cursor: "pointer"
                    }}
                > 
                    Excluir
                </Button>
          </Flex>
            )
        }
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async(ctx)=>{
  const api = setupApiClient(ctx)

  const { data: categories} = await api.get("/category")

  return{
    props:{
      categories,
    }
  }
})