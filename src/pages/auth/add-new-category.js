import { FormLabel, Input, Flex, Button, useToast } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"



export default function AddNewCategory({categories}) {
  const [ name, setName] = useState('')
  const toast = useToast()

  async function handleSubmitCategory(){

    const categoriesExisits = categories.find( categorie => categorie.name === name);

    if(categoriesExisits){
      toast({
        title: 'Categoria já existe, escolha outro nome!',
        status: 'warning',
        duration: 2000, // 2seconds
        isClosable: true,
        position: "top"
      });

        return
    }

    await api.post("/category", {
         name,
     })
     .then( ()=>
          toast({
            title: 'Categoria criada com sucesso!',
            status: 'success',
            duration: 2000, // 2seconds
            isClosable: true,
            position: "top"
          }),

          setTimeout(()=> location.reload(),  
                          2000 /* 2seconds */)
    ).catch(err =>
      toast({
          title: 'Erro ao deletar categoria!',
          description: err.response.data.message,
          status: 'error',
          duration: 3000, //4 seconds
          isClosable: true,
          position: "top"
      })
  )

 }

  return (
    <Flex>
      <Head>
        <title>Registro de nova categoria </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex  
        flexDir="column"
        align="center" 
        justify="center" 
        w="100vw"
        h="100vh"
        color="black"
        bg="whitesmoke"
      >
   

        <form >
          <FormLabel 
              fontWeight="bold"
          >
            Nome:
          </FormLabel>
          
            <Input
              bg="#fff"
              border="1px solid black"
              value={name}
              
              
              onChange={(e)=>setName(e.target.value)}
              
            />

            <Button 
                bg="#0000cd" 
                color="#fff"
                width="80%"
                mt="1em"
                ml="1em"
                onClick={handleSubmitCategory}
                _hover={{
                opacity: .8,
                cursor: "pointer"
                }}
            > 
                Enviar
            </Button>
          

          </form>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async(ctx)=>{
  const api = setupApiClient(ctx)

  const { data: categories} = await api.get("/category")

  return{
    props:{
      categories
    }
  }
})